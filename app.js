// Seu código JavaScript no lado do cliente

const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

const initialHeight = 25; // Altura inicial da caixa de texto

const loadDataFromLocalstorage = () => {
  // ... (o resto do seu código permanece inalterado)
};

loadDataFromLocalstorage();

const handleOutgoingChat = async () => {
  const userText = chatInput.value.trim();
  if (!userText) return;

  chatInput.value = "";
  chatInput.style.height = `${initialHeight}px`;

  const html = `<div class="chat-content">
      <div class="chat-details">
          <img src="avatar-client.png" alt="client-img">
          <p></p>
      </div>
  </div>`;

  const outgoingChatDiv = createElement(html, "outgoing");
  outgoingChatDiv.querySelector("p").textContent = userText;
  document.querySelector(".default-text")?.remove();
  chatContainer.appendChild(outgoingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  try {
    // Chamada para o servidor para obter a resposta da OpenAI
    const response = await fetch('/api/getChatResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userText }),
    });

    const responseData = await response.json();

    // Processa a resposta e atualiza a interface do usuário
    // (o restante do seu código relacionado à resposta da OpenAI permanece inalterado)
  } catch (error) {
    console.error(error);
    // Trate erros ao chamar o servidor
  }
};

// Restante do seu código permanece inalterado
// Seu código JavaScript no lado do cliente

const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");

const initialHeight = 25; // Altura inicial da caixa de texto

const loadDataFromLocalstorage = () => {
  // ... (o resto do seu código permanece inalterado)
};

loadDataFromLocalstorage();

const handleOutgoingChat = async () => {
  const userText = chatInput.value.trim();
  if (!userText) return;

  chatInput.value = "";
  chatInput.style.height = `${initialHeight}px`;

  const html = `<div class="chat-content">
      <div class="chat-details">
          <img src="avatar-client.png" alt="client-img">
          <p></p>
      </div>
  </div>`;

  const outgoingChatDiv = createElement(html, "outgoing");
  outgoingChatDiv.querySelector("p").textContent = userText;
  document.querySelector(".default-text")?.remove();
  chatContainer.appendChild(outgoingChatDiv);
  chatContainer.scrollTo(0, chatContainer.scrollHeight);

  try {
    // Chamada para o servidor para obter a resposta da OpenAI
    const response = await fetch('/api/getChatResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userText }),
    });

    const responseData = await response.json();

    // Processa a resposta e atualiza a interface do usuário
    // (o restante do seu código relacionado à resposta da OpenAI permanece inalterado)
  } catch (error) {
    console.error(error);
    // Trate erros ao chamar o servidor
  }
};

// Restante do seu código permanece inalterado
