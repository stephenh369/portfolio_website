const cards = document.querySelectorAll(".card");

// Moving Event
cards.forEach((card) => card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 100;
  let yAxis = (window.innerHeight / 2 - e.pageY) / -450;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}));

//Animate In
cards.forEach((card) => card.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  let info = card.querySelector(".card-info");
  info.style.transform = "translateZ(75px)"; info.style.transition = "all 0.75s ease-out";
}));
//Animate Out
cards.forEach((card) => card.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  let info = card.querySelector(".card-info");
  info.style.transform = "translateZ(0px)";  info.style.transition = "all 0.5s ease-in";
}));

