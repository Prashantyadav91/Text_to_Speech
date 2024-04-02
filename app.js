let speech = new SpeechSynthesisUtterance();
const btn = document.querySelector("button");

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.textContent = voice.name;
        option.setAttribute('value', i);
        voiceSelect.appendChild(option);
    });
    speech.voice = voices[0];
};

voiceSelect.addEventListener("change",() => {
    speech.voice = voices[voiceSelect.value];
});

btn.addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});