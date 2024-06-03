import { GEMINI_KEY } from "./constant";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
 export const genAI = new GoogleGenerativeAI(GEMINI_KEY);

// ...

// The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
 export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

// ... 