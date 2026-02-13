const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const hint   = document.getElementById("hint");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const movieBtn = document.getElementById("movieBtn");

const messages = [
  "Sicura/o? 👀",
  "Daiii 😭",
  "Ma io ho già scelto gli snack!",
  "Ok ultima chance… 😇",
  "Non puoi scappare per sempre 😈"
];

let tries = 0;

function randomPos() {
  const padding = 24;
  const rect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth  - rect.width  - padding;
  const maxY = window.innerHeight - rect.height - padding;

  const x = Math.max(padding, Math.floor(Math.random() * maxX));
  const y = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.left = x + "px";
  noBtn.style.top  = y + "px";
  noBtn.style.right = "auto";
}

function openModal() {
  modal.setAttribute("aria-hidden", "false");
}

function hideModal() {
  modal.setAttribute("aria-hidden", "true");
}

// Personalizza QUI il testo dell’invito (WhatsApp)
const msg = encodeURIComponent("Ehi 💖 allora stasera film? 🍿🎬 Io porto gli snack!");
// Opzione 1: WhatsApp Web / app (senza numero, scegli chat)
movieBtn.href = `https://wa.me/?text=${msg}`;

// Opzione 2 (più “diretta”): se vuoi aprire una chat specifica,
// inserisci numero in formato internazionale (es: +39...) SENZA + e spazi.
// const phone = "393331112222";
// movieBtn.href = `https://wa.me/${phone}?text=${msg}`;

noBtn.addEventListener("mouseenter", () => {
  randomPos();
  hint.textContent = messages[Math.min(tries, messages.length - 1)];
  tries++;
});

noBtn.addEventListener("click", () => {
  randomPos(); // mobile friendly
  hint.textContent = "Nope 😌";
});

yesBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", hideModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) hideModal();
});

window.addEventListener("resize", () => {
  const rect = noBtn.getBoundingClientRect();
  if (rect.right > window.innerWidth || rect.bottom > window.innerHeight) {
    randomPos();
  }
});
