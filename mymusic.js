let showBtn = document.querySelector(".navbar2");
console.log(showBtn);
function showReview() {
  showBtn.classList.toggle("active");
}

// let addBtn = document.getElementById("sm");
// console.log(addBtn);
// addBtn.addEventListener("click", () => {
//   let addTxt = document.getElementById("addTxt");
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }

//   notesObj.push(addTxt.value);
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   addTxt.value = "";
//   console.log(notesObj);
// });

// function showNotes() {
//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//   } else {
//     notesObj = JSON.parse(notes);
//   }
// }

console.log("hi everybody. how are you.");
