const meditations = [
  "Close your eyes. Take 3 deep breaths. Feel the air fill your lungs, then let it go slowly.",
  "Imagine a calm ocean wave. Let it wash over you, taking away your stress.",
  "Focus on your feet. Feel them grounded to the earth. Breathe in peace.",
  "Picture a warm light above you. Let it flow down, relaxing your whole body.",
  "Listen to the sounds around you. Let them fade as you breathe deeply.",
  "Think of something you’re grateful for. Hold that feeling for a moment.",
  "Feel your heartbeat. Sync your breath with its rhythm for a minute."
];

function getMeditation() {
  try {
    const today = new Date().toDateString();
    const lastUsed = localStorage.getItem('lastMeditationDate') || '';
    const meditationDiv = document.getElementById('meditation');

    if (!meditationDiv) {
      console.error("Meditation div not found!");
      return;
    }

    if (lastUsed === today) {
      meditationDiv.innerHTML = "You’ve already got today’s meditation. Upgrade for more!";
      return;
    }

    const randomMeditation = meditations[Math.floor(Math.random() * meditations.length)];
    meditationDiv.innerHTML = `<p>${randomMeditation}</p>`;
    localStorage.setItem('lastMeditationDate', today);
  } catch (error) {
    console.error("Error in getMeditation:", error);
    document.getElementById('meditation').innerHTML = "Something went wrong. Please try again.";
  }
}

function subscribe() {
  window.location.href = 'https://buy.stripe.com/test_14k7uKa1S5ZQ8PS000';
}

function oneTime() {
  window.location.href = 'https://buy.stripe.com/test_28o8uKb1S5ZQ8PS000';
}
