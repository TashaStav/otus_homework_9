export function runChatForm() {
  document.querySelector('.form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nameInput = document.querySelector('.name-input');
    const messageInput = document.querySelector('.message-input');
    const username = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (username && message) {
      const chatBox = document.querySelector('.message');
      const newMessage = document.createElement('div');
      newMessage.classList.add('chat-message');
      newMessage.innerHTML = `<span>${username}:</span> ${message}`;

      chatBox.appendChild(newMessage);
      chatBox.scrollTop = chatBox.scrollHeight;

      username.value = '';
      message.value = '';
    }
  });
}
document.addEventListener('DOMContentLoaded', runChatForm);
