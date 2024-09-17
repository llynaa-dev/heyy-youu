let currentLayer = 1;
let isMusicPlaying = true;

function startExperience() {
  // Hide intro screen and show the main content
  document.getElementById('intro-screen').style.display = 'none';
  document.getElementById('container').style.display = 'block';
  
  // Play music after user interaction
  playMusic();
}

function playMusic() {
  document.getElementById('bgMusic').play();
}

function stopMusic() {
  document.getElementById('bgMusic').pause();
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const speakerIcon = document.getElementById('speaker-icon');

  if (isMusicPlaying) {
    music.pause();
    speakerIcon.innerHTML = '🔇'; // Change to muted icon
  } else {
    music.play();
    speakerIcon.innerHTML = '🔊'; // Change to speaker icon
  }

  isMusicPlaying = !isMusicPlaying;
}

function nextLayer(layer) {
  document.getElementById(`layer${currentLayer}`).style.display = 'none';
  document.getElementById(`layer${layer}`).style.display = 'block';
  currentLayer = layer;
}

function restart() {
  document.getElementById(`layer${currentLayer}`).style.display = 'none';
  document.getElementById(`layer1`).style.display = 'block';
  currentLayer = 1;
  stopMusic();
  playMusic();
}