 const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");

async function sendMessage() {

    const question = input.value.trim();

    if (!question) {
        return;
    }

    // Show user message
    addMessage(question, "user");

    // Clear input
    input.value = "";

    // Show loading message
    const loadingMessage = addMessage("Thinking...", "bot");

    try {

        const response = await fetch("/chat", {

            method: "POST",  //POST means you're sending data to the server.

            headers: {
                "Content-Type": "application/json"  //The information I'm sending is JSON
            },

            body: JSON.stringify({
                message: question
            })

        });

        const data = await response.json();

        // Remove loading message
        loadingMessage.remove();

        if (data.reply) {

            addMessage(data.reply, "bot");

        } else {

            addMessage("Something went wrong.", "bot");

        }

    } catch (error) {

        console.error(error);

        loadingMessage.remove();

        addMessage(
            "Unable to connect to the server.",
            "bot"
        );

    }

}

function addMessage(message, type) {

    const div = document.createElement("div");

    div.classList.add("message", type);

    div.textContent = message;

    chatBox.appendChild(div);

    // Automatically scroll down
    chatBox.scrollTop = chatBox.scrollHeight;

    return div;
}


// Button click
sendBtn.addEventListener("click", sendMessage);


// Press Enter
input.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        sendMessage();

    }

});