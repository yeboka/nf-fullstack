// Создать переменную `flashLightsInterval`
// Создать 3 функции `changeColor`, `flashText`, `stopTextColor`
// `changeColor` должна реагировать на нажатие кнопки `#start`
// Также, должна создать интервал к flashLightsInterval и каждую секунду вызывать
// коллбэк `flashText`
// `flashText` должна менять классы для id "police" cо ".stop" на ".go" и обратно,
// периодичностью в 1 секунду => setInterval()
// `stopTextColor` должна реагировать на нажатие кнопки `#stop`
// также, должна очистить интервал и переписать глобальную переменную `window.plans.planD=true;`

let flashLightsInterval = null;

function changeColor() {
  if (flashLightsInterval === null) {
    flashLightsInterval = setInterval(() => {
      flashText();
    }, 500);
  }
}

function flashText() {
  const policeText = document.getElementById("police");
  if (policeText.className === "stop") {
    policeText.className = "go";
  } else {
    policeText.className = "stop";
  }
}

function stopTextColor() {
  clearInterval(flashLightsInterval);
  flashLightsInterval = null;
  const policeText = document.getElementById("police");
  policeText.className = "";
  window.plans.planD=true
}

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

startBtn.addEventListener("click", changeColor);
stopBtn.addEventListener("click", stopTextColor);
