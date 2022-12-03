const hours = document.querySelector("#hour");
const minutes = document.querySelector("#minute");
const seconds = document.querySelector("#second");
const ampmEl = document.querySelector("#ampm");

const updateClock = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampm = "AM";

  if (h === 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  //add 0 to the front of any number less than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampmEl.innerText = ampm;

  // update the code every second
  setTimeout(() => {
    updateClock();
  }, 1000);
};

updateClock();
// let today=new Date()
// let time = `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`;
// console.log(time);

//    let today = new Date();
//    hours = today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
//    minutes =
//      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
//    seconds =
//      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
