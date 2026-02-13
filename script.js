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
  const hintEl = document.getElementById("hint");

  if (!noButton || !yesButton) return;

  // Cambia testo del NO
  const msg = messages[messageIndex];
  noButton.textContent = msg;
  if (hintEl) hintEl.textContent = msg;

  messageIndex = (messageIndex + 1) % messages.length;

  // Yes cresce ma con limite (così non rompe il layout)
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  const nextSize = Math.min(currentSize * 1.2, 50); // max 50px
  yesButton.style.fontSize = `${nextSize}px`;

  // No scappa
  moveNoButton(noButton);
}

function moveNoButton(button) {
  const padding = 20;
  const rect = button.getBoundingClientRect();

  const maxX = window.innerWidth - rect.width - padding;
  const maxY = window.innerHeight - rect.height - padding;

  const x = Math.max(padding, Math.floor(Math.random() * maxX));
  const y = Math.max(padding, Math.floor(Math.random() * maxY));

  button.style.position = "fixed";
  button.style.left = x + "px";
  button.style.top = y + "px";
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
