import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

 const safety_setting = {
        'HATE': 'BLOCK_NONE',
        'HARASSMENT': 'BLOCK_NONE',
        'SEXUAL' : 'BLOCK_NONE',
        'DANGEROUS' : 'BLOCK_NONE'
    };


export const gemini_run = async (prompt) => {

    const result = await model.generateContent(prompt, safety_setting);
    const response = result.response;
    console.log("response ::",response);

    const text = response.text();
    console.log("text ::",text);

    return text;
}

export default gemini_run;