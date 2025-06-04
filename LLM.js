import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "AIzaSyBHiFLrBUFgtiMj6N0PVHq2Ce4mD4B-QpA" });

const history = []
async function ChatwithAI(userProblem) {

    history.push({
            role:'user',
            parts:[{text:userProblem}]
        })

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: history
  });

  history.push({
        role:'model',
        parts:[{text:response.text}]
    })

  console.log(response.text);
}

async function main() {
    const userProblem = readlineSync.question("Ask me anything-->")
    await ChatwithAI(userProblem)
    main();
}
await main();