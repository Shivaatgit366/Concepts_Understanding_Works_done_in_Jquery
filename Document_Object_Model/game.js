var button = document.getElementsByClassName("btn btn-primary");
var button1 = button[0];
var squares = document.getElementsByTagName("td")


function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}


button1.addEventListener("click", clearBoard)



// restart button completed, now we code for table cell text content.
var cell1 = document.getElementById("one")


// "this" keyword refers to the entire object. So here also, "this" keyword helps us to select the whole list.
function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  }
  else if (this.textContent === "X") {
    this.textContent = "O";
  }
  else {
    this.textContent = "";
  }
}


// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}



// button1.addEventListener("Click", function () {
//   button1.style.color = "yellow";
//   alert("start the game player2, when your turn ends just click one time for player1")
//   alert("hover over the cells of the table")
// })


// var cell1 = document.getElementById("one")
// var cell2 = document.getElementById("two")
// var cell3 = document.getElementById("three")
// var cell4 = document.getElementById("four")
// var cell5 = document.getElementById("five")
// var cell6 = document.getElementById("six")
// var cell7 = document.getElementById("seven")
// var cell8 = document.getElementById("eight")
// var cell9 = document.getElementById("nine")
//
//
// cell1.addEventListener("mouseover", function () {
//   cell1.innerHTML = "<h4><strong>X</strong></h4>"
// })
//
//
// cell2.addEventListener("mouseover", function () {
//   cell2.innerHTML = "<h4><strong>Y</strong></h4>"
// })
//
//
// cell3.addEventListener("mouseover", function () {
//   cell3.innerHTML = "<h4><strong>A</strong></h4>"
// })
//
//
// cell4.addEventListener("mouseover", function () {
//   cell4.innerHTML = "<h4><strong>B</strong></h4>"
// })
//
//
// cell5.addEventListener("mouseover", function () {
//   cell5.innerHTML = "<h4><strong>C</strong></h4>"
// })
//
//
// cell6.addEventListener("mouseover", function () {
//   cell6.innerHTML = "<h4><strong>D</strong></h4>"
// })
//
//
// cell7.addEventListener("mouseover", function () {
//   cell7.innerHTML = "<h4><strong>X</strong></h4>"
// })
//
//
// cell8.addEventListener("mouseover", function () {
//   cell8.innerHTML = "<h4><strong>M</strong></h4>"
// })
//
//
// cell9.addEventListener("mouseover", function () {
//   cell9.innerHTML = "<h4><strong>X</strong></h4>"
// })
