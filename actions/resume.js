"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { revalidatePath } from "next/cache";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function saveResume(content) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Corrected clerkUserId
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  try {
    //upodate or insert - upsert
    const resume = await db.resume.upsert({
      where: { userId: user.id },
      update: { content }, //if exists
      create: { userId: user.id, content }, // if not then creates new one
    });
    revalidatePath("/resume");
    return resume;
  } catch (err) {
    console.error("Failed to save resume:", err);
    throw new Error("Failed to save resume");
  }
}

export async function getResume() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Corrected clerkUserId
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("User not found");

  return db.resume.findUnique({
    where: { userId: user.id },
  });
}

export async function improveWithAi({ current, type }) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Corrected clerkUserId
  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    select: { industry: true },
  });
  if (!user) throw new Error("User not found");

  const prompt = `
As an expert resume writer, improve the following ${type} description for a ${user.industry} professional.
Make it more impactful, quantifiable, and aligned with industry standards.
Current content: "${current}"

Requirements:
1. Use action verbs
2. Include metrics and results where possible
3. Highlight relevant technical skills
4. Keep it concise but detailed
5. Focus on achievements over responsibilities
6. Use industry-specific keywords

Format the response as a single paragraph without any additional text or explanations.
  `.trim();

  try {
    const result = await model.generateContent(prompt);
    return result.response.text().trim();
  } catch (err) {
    console.error("Error improving content:", err);
    throw new Error("Failed to improve content");
  }
}
