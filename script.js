      const squareList = document.querySelectorAll(".square");

      function onHoverChange(index) {
        for (let i = 0; i < squareList.length; i++) {
          if (i !== index) {
            squareList[i].classList.add("coffee");
          }
        }
      }

      function reset() {
        for (let i = 0; i < squareList.length; i++) {
          squareList[i].classList.remove("coffee");
        }
      }

      for (let i = 0; i < squareList.length; i++) {
        squareList[i].addEventListener("mouseover", () => {
          onHoverChange(i);
        });

        squareList[i].addEventListener("mouseout", () => {
          reset();
        });
      }