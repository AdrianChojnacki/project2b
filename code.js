document.body.style.height = "10000px";

// Create bar
const bar = document.createElement(`div`);
document.body.appendChild(bar);

// Bar styles
let barHeight = 10;
bar.style.height = `${barHeight}px`;
bar.style.backgroundColor = "green";

// Function variables
const maxHeight = window.innerHeight / 2;
let grow = true;
let bgColor = true;

// Bar change function
const barChange = () => {
  if (barHeight >= maxHeight) {
    grow = !grow;
  } else if (barHeight <= 0) {
    grow = !grow;
    bgColor = !bgColor;
  }

  if (grow) {
    barHeight += 5;
  } else {
    barHeight -= 5;
  }

  bar.style.height = `${barHeight}px`;

  if (bgColor) {
    bar.style.backgroundColor = "green";
  } else {
    bar.style.backgroundColor = "red";
  }
};

// Event listener
window.addEventListener(`scroll`, barChange);
