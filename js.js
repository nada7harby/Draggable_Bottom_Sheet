const btn = document.querySelector(".btnn");
const Sheet = document.querySelector(".sheet");
const ovally = Sheet.querySelector(".ovally");
const drag_icon = document.querySelector(".icon");
const content = document.querySelector(".content");

let isDrag = false,
  startY,
  heightY;
const showDocment = () => {
  console.log("hi");
  Sheet.classList.add("show");
  updateHeight(50);
};
const hideDocument = () => {
  console.log("hi");
  Sheet.classList.remove("show");
};

const dragstart = (e) => {
  isDrag = true;
  startY = e.pageY || e.touches?.[0].pageY;
  heightY = parseInt(content.style.height);
  Sheet.classList.add("movetransition");
};
const dragend = (e) => {
  isDrag = false;
  Sheet.classList.remove("movetransition");
  const Sheetheight = parseInt(content.style.height);
  Sheetheight < 25
    ? hideDocument()
    : Sheetheight > 75
    ? updateHeight(100)
    : updateHeight(50);
};
const updateHeight = (x) => {
  content.style.height = `${x}vh`;
};
const draggable = (e) => {
  if (!isDrag) return;
  content.style.height = `${e.pageY}vh`;
  const delta = startY - (e.pageY || e.touches?.[0].pageY);
  const newheight = heightY + (delta / window.innerHeight) * 100;
  updateHeight(newheight);
};

document.addEventListener("mouseup", dragend);
drag_icon.addEventListener("mousedown", dragstart);
document.addEventListener("mousemove", draggable);

document.addEventListener("touchend", dragend);
drag_icon.addEventListener("touchstart", dragstart);
document.addEventListener("touchmove", draggable);

btn.addEventListener("click", showDocment);
ovally.addEventListener("click", hideDocument);
