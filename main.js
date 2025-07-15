const noteFrequencies = {
  'C': 261.63,
  'C#': 277.18,
  'D': 293.66,
  'D#': 311.13,
  'E': 329.63,
  'F': 349.23,
  'F#': 369.99,
  'G': 392.00,
  'G#': 415.30,
  'A': 440.00,
  'A#': 466.16,
  'B': 493.88
};

function playNote(note) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.value = noteFrequencies[note];
  gain.gain.value = 0.2;

  oscillator.connect(gain);
  gain.connect(audioCtx.destination);

  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    audioCtx.close();
  }, 400);
}

document.querySelectorAll('.white-key, .black-key').forEach(key => {
  key.addEventListener('click', () => {
    const note = key.getAttribute('data-note');
    playNote(note);
  });
});
