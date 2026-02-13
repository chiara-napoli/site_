const messages = [
  "Sei sicuro? 👀",
  "Davvero davvero sicuro?",
  "Bro… ripensaci 😭",
  "Scelta discutibile.",
  "Errore 404: risposta sbagliata.",
  "Il tasto rosso è solo decorativo.",
  "Stai facendo una pessima scelta 😌",
  "Sistema in crash.",
  "Ultima possibilità prima del rimorso.",
  "Dai, clicca Yes e non fare il duro ❤️"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  if (!noButton || !yesButton) return;

  // Cambia testo del bottone NO
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Ingrandisce YES ma con limite (così non distrugge il layout)
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  const nextSize = Math.min(currentSize * 1.2, 50); // massimo 50px
  yesButton.style.fontSize = `${nextSize}px`;

  // Sposta leggermente il NO (effetto dodge)
  moveNoButton(noButton);
}

function moveNoButton(button) {
  const padding = 20;
  const rect = button.getBoundingClientRect();

  const maxX = window.innerWidth - rect.width - padding;
  const maxY = window.innerHeight - rect.height - padding;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.position = "fixed";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
