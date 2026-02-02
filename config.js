// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
  valentineName: "Mana❤️",
  pageTitle: "Will You Be My Valentine? 💝",

  floatingEmojis: {
    hearts: ['❤️', '💖', '💝', '💗', '💓'],
    bears: ['🐶', '🦜']
  },

  questions: {
    first: {
      text: "Do you like me?",
      yesBtn: "Yes",
      noBtn: "No",
      secretAnswer: "I don't like you, I love you! ❤️"
    },

    second: {
      text: "How much do you love me?",
      startText: "This much!",
      nextBtn: "Next ❤️"
    },

    // ❤️ FINAL VALENTINE QUESTION (UPDATED)
    third: {
      text: "Will you be my Valentine on February 14th, 2026? 🌹",
      yesBtn: "YES! 💚",
      noBtn: "No 💔",

      // NO button cycles through these each time she clicks
      noPhrases: [
        "Are you sure? 😳",
        "You’re kidding me… 🥺",
        "Think again, dear 💞",
        "Oh no way u cant keep click this?! 😤",
        "Okay please say yesss! 😭💚"
      ],

      // YES button grows every time she clicks NO
      yesGrowStep: 0.18,
      yesMaxScale: 2.2
    }
  },

  loveMessages: {
    extreme: "WOOOOW You love me that much?? 🥰🚀💝",
    high: "To infinity and beyond! 🚀💝",
    normal: "And beyond! 🥰"
  },

  celebration: {
    title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
    message: "Can't wait to treat you, rio and pillie rani on14t !",
    emojis: "🎁💖🐶🦜🤗💝💋❤️💕"
  },

  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  },

  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
  },

  music: {
    enabled: true,
    autoplay: true,
    musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};



// ===============================================================
// 🚀 YOU DO NOT NEED A MAIN.JS — THIS FUNCTION JUST WORKS.
// This magically upgrades the 3rd question’s YES/NO buttons.
// ===============================================================

window.setupThirdQuestionBehavior = function(yesButtonEl, noButtonEl) {
  // Make YES green
  yesButtonEl.style.background = "#2ecc71";
  yesButtonEl.style.color = "#fff";
  yesButtonEl.style.transition = "transform 250ms ease";

  // Make NO red
  noButtonEl.style.background = "#ff3b3b";
  noButtonEl.style.color = "#fff";

  const phrases = CONFIG.questions.third.noPhrases;
  const step = CONFIG.questions.third.yesGrowStep;
  const maxScale = CONFIG.questions.third.yesMaxScale;

  let index = 0;
  let yesScale = 1;

  noButtonEl.addEventListener("click", () => {
    // Change NO text
    if (index < phrases.length) {
      noButtonEl.textContent = phrases[index];
      index++;
    }

    // Grow YES button
    if (yesScale < maxScale) {
      yesScale += step;
      yesButtonEl.style.transform = `scale(${yesScale})`;
    }

    // Cute shake effect
    noButtonEl.style.animation = "none";
    void noButtonEl.offsetWidth;
    noButtonEl.style.animation = "shake 0.25s";
  });
};


// Inject shake animation
const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-4px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(shakeStyle);
``
