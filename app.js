const axios = require("axios");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a topic: ", async (topic) => {
    try {
        const response = await axios.post(
            "http://localhost:11434/api/generate",
            {
                model: "tinyllama", // or llama3
                prompt: `Explain ${topic} in simple terms with examples`,
                stream: false
            }
        );

        console.log("\nExplanation:\n");
        console.log(response.data.response);

    } catch (error) {
        console.error("Error:", error.message);
    }

    rl.close();
});