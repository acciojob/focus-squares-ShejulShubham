//your JS code here. If required.
// Select all squares
const squares = document.querySelectorAll(".square");

// Colors
const lavender = "#E6E6FA";
const coffee = "#6F4E37";

// Loop through each square
squares.forEach((sq) => {
  // When mouse enters one square
  sq.addEventListener("mouseover", () => {
    squares.forEach((otherSq) => {
      if (otherSq !== sq) {
        otherSq.style.backgroundColor = coffee;
      }
    });
  });

  // When mouse leaves that square
  sq.addEventListener("mouseout", () => {
    squares.forEach((s) => {
      s.style.backgroundColor = lavender;
    });
  });
});