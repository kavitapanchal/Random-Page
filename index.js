const randomSentences = [
    "The universe is vast and ever-expanding, with billions of galaxies.",
    "Black holes are regions of space where gravity is so strong that not even light can escape.",
    "The Milky Way is the galaxy that contains our solar system.",
    "The speed of light is approximately 299,792 kilometers per second.",
    "Astronomers use telescopes to study distant stars and galaxies.",
    "Mars, also known as the Red Planet, is one of the most explored planets in our solar system.",
    "The first human landing on the Moon was in 1969 by the Apollo 11 mission.",
    "The International Space Station orbits Earth at an average altitude of 400 kilometers.",
    "Saturn is famous for its stunning ring system, made of ice and rock particles.",
    "The Andromeda Galaxy is the closest spiral galaxy to the Milky Way.",
    "Stars are born in nebulas, which are clouds of gas and dust in space.",
    "The Hubble Space Telescope has captured some of the most detailed images of distant galaxies.",
    "Comets are icy bodies that orbit the Sun and develop glowing tails when they approach it.",
    "Dark matter and dark energy make up most of the universe, yet they remain mysterious to scientists.",
    "Jupiter is the largest planet in our solar system and has more than 79 moons.",
    "A light year is the distance light travels in one year, about 9.46 trillion kilometers.",
    "Supernovae are powerful explosions that occur when massive stars reach the end of their life cycle.",
    "Exoplanets are planets that orbit stars outside of our solar system.",
    "The Big Bang theory explains the origin of the universe about 13.8 billion years ago.",
    "Venus is the hottest planet in our solar system due to its thick atmosphere trapping heat."
  ];

  function generateParagraph() {
    const rows = document.getElementById("rows").value;
    let paragraph = "";
    
    for (let i = 0; i < rows; i++) {
      const randomIndex = Math.floor(Math.random() * randomSentences.length);
      paragraph += i+1 + ". " +randomSentences[randomIndex] + "\n\n";
      
    }
    
    document.getElementById("output").value = paragraph.trim();
  }