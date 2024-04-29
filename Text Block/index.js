// const resizable = document.getElementById("resizable");
// const text = document.getElementById("resizable-text");

// let isResizing = false;
// let prevX = 0;
// let prevY = 0;

// resizable.addEventListener("mousedown", function (event) {
//   if (event.target === resizable) {
//     isResizing = true;
//     prevX = event.clientX;
//     prevY = event.clientY;
//   }
// });

// document.addEventListener("mousemove", function (event) {
//   if (!isResizing) return;
//   const width = resizable.offsetWidth + (event.clientX - prevX);
//   const height = resizable.offsetHeight + (event.clientY - prevY);
//   resizable.style.width = width + "px";
//   resizable.style.height = height + "px";
//   prevX = event.clientX;
//   prevY = event.clientY;
// });

// document.addEventListener("mouseup", function () {
//   isResizing = false;
// });
