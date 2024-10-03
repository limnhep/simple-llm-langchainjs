# LangChain Simple LLM

This lesson demonstrates how to use the LangChain library to create a simple language model application that translates English to French. Inspired by the [LangChain documentation](https://js.langchain.com/v0.1/docs/getting-started/introduction/). Detailed explanation of the code is in the comments. Good for beginners to understand the basics of LangChain and how to create a simple LLM application.

## Table of Contents

- [Installation](#installation)
- [Code Overview](#code-overview)
- [Key Concepts](#key-concepts)
- [Usage](#usage)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## Code Overview

The main file is `langchain_simple_llm.js`, which contains the following key components:

1. **Imports**: The necessary modules from the LangChain library and dotenv for environment variable management.
2. **Environment Configuration**: Loads the OpenAI API key from the `.env` file.
3. **Model Initialization**: Sets up the ChatOpenAI model with the specified model type.
4. **Message Setup**: Defines the system and human messages for the translation task.
5. **Prompt Template**: Creates a prompt template that formats the input for the model.
6. **LLM Chain**: Pipes the prompt template through the model and output parser.
7. **Execution**: An asynchronous function that invokes the LLM chain and logs the result.

## Key Concepts

- **ChatOpenAI**: A class that interfaces with OpenAI's chat models, allowing for conversational interactions.
- **Messages**: The `SystemMessage` and `HumanMessage` classes are used to define the context and user input for the model.
- **StringOutputParser**: Parses the output from the model into a string format.
- **ChatPromptTemplate**: A template that structures the input messages for the model.
- **Piping**: The use of `.pipe()` to connect different components (prompt template, model, and parser) into a single processing chain.
- **Asynchronous Function**: The `run` function is defined as asynchronous to handle the promise returned by the model invocation.

## Usage

To run the application, execute the following command in your terminal:
