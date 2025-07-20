import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "AiCoach",
name:"AiCoach" ,
credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },});
