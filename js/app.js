// Start draggable
let inputdata = document.getElementById("inputdata");
let btnadd = document.getElementById("btnadd");
let task = document.querySelectorAll(".tasks");
let itemdrag = null;

btnadd.onclick = function () {
  if (inputdata.value != "") {
    task[0].innerHTML += `
        <p class="taskbox_data" draggable="true">${inputdata.value}</p>
        `;
    inputdata.value = "";
  }
  dragItems();
};
function dragItems() {
  let itemTask = document.querySelectorAll(".taskbox_data");
  itemTask.forEach((taskItem) => {
    taskItem.addEventListener("dragstart", function () {
      itemdrag = taskItem;
      this.style.opacity = "0.7";
      this.style.color = "black";
    });
    taskItem.addEventListener("dragend", function () {
      itemdrag = null;
      this.style.opacity = "1";
      this.style.color = "white";
    });
    task.forEach((taskit) => {
      taskit.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#91cee1";
      });
      taskit.addEventListener("dragleave", function () {
        this.style.background = "white";
      });
      taskit.addEventListener("drop", function () {
        this.append(itemdrag);
        this.style.background = "white";
      });
    });
  });
}
// End draggable

// Start Stopwatch

let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;

let msStarting = document.getElementById("ms");
let secStarting = document.getElementById("sec");
let minStarting = document.getElementById("min");
let hrStarting = document.getElementById("hour");

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let interval;

function stopwatch() {
  ms++;
  if (ms == 100) {
    ms = 0;
    sec++;
    msStarting.innerHTML = ms;
  }
  if (sec == 60) {
    sec = 0;
    min++;
    secStarting.innerHTML = sec;
  }
  if (min == 60) {
    min = 0;
    hour++;
    minStarting.innerHTML = min;
  }
  if (ms < 10) {
    msStarting.innerHTML = "0" + ms;
  } else {
    msStarting.innerHTML = ms;
  }
  if (sec < 10) {
    secStarting.innerHTML = "0" + sec;
  } else {
    secStarting.innerHTML = sec;
  }
  if (min < 10) {
    minStarting.innerHTML = "0" + min;
  } else {
    minStarting.innerHTML = min;
  }
  if (hour < 10) {
    hrStarting.innerHTML = "0" + hour;
  } else {
    hrStarting.innerHTML = hour;
  }
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

let h = document.getElementById("hourd");
let m = document.getElementById("mind");
let s = document.getElementById("secd");

var startTimer = null;

function timer() {
  if (h.value == 00 && m.value == 00 && s.value == 00) {
    h.value = 00;
    m.value = 00;
    s.value = 00;
  } else if (s.value != 0) {
    s.value--;
  } else if (m.value != 0 && s.value == 0) {
    s.value = 60;
    m.value--;
  } else if (h.value != 0 && m.value == 0) {
    m.value = 60;
    h.value--;
  }
  return;
}

function stopTimer() {
  clearInterval(startTimer);
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(startTimer);
  clearInterval(interval);

  ms = 0;
  sec = 0;
  min = 0;
  hour = 0;
  msStarting.innerHTML = "00";
  secStarting.innerHTML = "00";
  minStarting.innerHTML = "00";
  hrStarting.innerHTML = "00";

  h.value = 0;
  m.value = 0;
  s.value = 0;
  h.innerHTML = "00";
  m.innerHTML = "00";
  s.innerHTML = "00";
}

function startTimer() {
  clearInterval(interval);
  interval = setInterval(stopwatch, 10);
}

start.addEventListener("click", function () {
  function startInterval() {
    startTimer = setInterval(function () {
      timer();
    }, 1000);
  }
  startInterval();
});
