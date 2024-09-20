// Définition de la classe BubbleCounter
class BubbleCounter {
  constructor() {
    // Initialisation du compteur de bulles et de l'élément d'affichage du compteur
    this.counter = 0;
    this.counterDisplay = document.getElementById("counterDisplay");
  }

  // Méthode pour créer une bulle
  createBubble() {
    // Création d'un élément de bulle
    const bubble = document.createElement("span");
    bubble.classList.add("bubble"); // Ajout de la classe CSS pour la bulle
    document.body.appendChild(bubble); // Ajout de la bulle au corps du document

    // Génération de la taille aléatoire de la bulle
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    // Positionnement aléatoire de la bulle sur l'écran
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    // Détermination aléatoire de la direction de déplacement de la bulle
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--leftPos", Math.random() * 100 * plusMinus + "%");

    // Gestion de l'événement de clic sur la bulle
    bubble.addEventListener("click", () => {
      // Incrémentation du compteur et mise à jour de l'affichage
      this.counter++;
      this.updateCounterDisplay();
      // Suppression de la bulle après le clic
      bubble.remove();
    });

    // Suppression automatique de la bulle après un délai de 8 secondes
    setTimeout(() => {
      bubble.remove();
    }, 8000);
  }

  // Méthode pour mettre à jour l'affichage du compteur
  updateCounterDisplay() {
    this.counterDisplay.textContent = this.counter;
  }

  // Méthode pour démarrer la génération de bulles à intervalle régulier
  start() {
    setInterval(() => {
      this.createBubble();
    }, 1000);
  }
}

// Instanciation de la classe BubbleCounter et démarrage de la génération de bulles
const bubbleCounter = new BubbleCounter();
bubbleCounter.start();
