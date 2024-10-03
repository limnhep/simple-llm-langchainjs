import { ChatOpenAI } from "@langchain/openai"; // Import the ChatOpenAI class from the LangChain OpenAI module
import { StringOutputParser } from "@langchain/core/output_parsers"; // Import the output parser for string formatting
import { ChatPromptTemplate } from "@langchain/core/prompts"; // Import the prompt template class for structuring inputs
import dotenv from "dotenv"; // Import dotenv to manage environment variables

dotenv.config(); // Load environment variables from the .env file

// Before diving into the code, make sure you have the following:
// 1. Node.js installed
// 2. npm installed
// 3. LangChain library installed
// 4. OpenAI API key set in the environment variables

// Additionally, when you use the .invoke() method, the invoke method takes in either a string or an object because that's how LLMs work.

// Check if the OpenAI API key is set in the environment variables
if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY in .env file"); // Log an error message if the API key is missing
  process.exit(1); // Exit the process with an error code
}

// Initialize the ChatOpenAI model with the specified model type
const model = new ChatOpenAI({ model: "gpt-3.5-turbo" });
const parser = new StringOutputParser(); // Create an instance of the output parser

// Define a system template for the prompt
const systemTemplate = "You are a helpful assistant that translates English to {language}.";

// Create a prompt template using the defined messages
const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate], // Add the system message to the template
  ["human", "{input}"] // Add a placeholder for the human input
]);

// Create a chain that pipes the prompt template through the model and parser
// The .pipe() method is used to create a chain of methods. It takes the output of the previous method as the input to the next method.
// This is a simple chain that takes the input, passes it to the model, and then passes the output to the parser.
// This is part of LangChain's Expression Language (LCEL).
// Chain of thought: prompt template -> model -> parser
const llmChain = promptTemplate.pipe(model).pipe(parser);

// Define an asynchronous function to run the model
(async function run() {
  // Invoke the LLM chain with the specified language and input
  const res = await llmChain.invoke({
    language: "French", // Set the target language for translation
    input: "Hi" // Set the input text to be translated
  });
  console.log(res); // Log the result of the translation to the console
})();




