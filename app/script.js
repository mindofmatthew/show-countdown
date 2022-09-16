const setlist = [
  ["Vulpine + zzwalsbyi", new Date("2022-09-16T20:30:00")],
  ["MrSynAckSter + IV", new Date("2022-09-16T21:00:00")],
  ["lehank + edgardo", new Date("2022-09-16T21:30:00")],
  ["Azhad + LAVA_GRRRL", new Date("2022-09-16T22:15:00")],
  ["Naltroc + emptyflash", new Date("2022-09-16T22:45:00")],
  ["mgs + eeeeaaii", new Date("2022-09-16T23:30:00")],
  ["Brian Abelson", new Date("2022-09-17T00:00:00")],
  ["Easterner + schwaz", new Date("2022-09-17T00:30:00")]
];

let i = 0;

function update() {
  requestAnimationFrame(update);
  
  document.getElementById("artist").innerText = setlist[i][0];
  let countdownTime = setlist[i][1].getTime() - Date.now();
  let minutes = Math.floor(countdownTime/60000);
  let seconds = Math.floor(countdownTime/1000) % 60;
  document.getElementById("clock").style.display = (minutes < 0 || seconds < 0) ? "none" : "block";
  document.getElementById("clock").innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

window.addEventListener("keydown", ({ key, repeat }) => {
  if (!repeat) {
  if (key === "ArrowRight") {
    i = Math.min(i + 1, setlist.length - 1);
  } else if (key === "ArrowLeft") {
    i = Math.max(i - 1, 0);
  }
}
});

window.addEventListener("load", update);