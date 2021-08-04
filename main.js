const coin = {
    state: 0,
    flip: function () {
      // 1. Randomly set your coin object's "state" property to be either
      //    0 or 1: use "this.state" to access the "state" property on this object.
      this.state = Math.floor(Math.random() * 2);
      return this.state;
    },
    toString: function () {
      // 2. Return the string "Heads" or "Tails", depending on whether
      //    "this.state" is 0 or 1.

      let flipResult = "";
      if (this.state === 0) {
          flipResult = "Tails"
      } else {
          flipResult = "Heads"
      }

      return flipResult

    },
    toHTML: function () {
      const image = document.createElement("img");
      // 3. Set the properties of this image element to show either face-up
      //    or face-down, depending on whether this.state is 0 or 1.
      //    You can use the heads and tails images inside of the "images" folder
      if (this.state === 0) {
          image.src = "./images/heads.png";
      } else {
              image.src = "./images/tails.png";
          }
      
      return image;
    }
    
  };

    //test if flip and toString function works
    let sampleFlipResult = coin.flip();
    sampleFlipResult = coin.toString();
    console.log(sampleFlipResult);

//checks if my image file links works
//let sampleImg = document.createElement("img")
//sampleImg.src = "./images/tails.png"
//document.body.append(sampleImg);


  function display20Flips() {
    const results = [];
    // 4. Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
    for (let numOfFlip = 1; numOfFlip <= 20; numOfFlip++) {
        let currentFlipResult = coin.flip();
        currentFlipResult = coin.toString();
    
        let displayFlipResult = document.createElement("div");
        displayFlipResult.innerHTML = currentFlipResult;
        document.body.append(displayFlipResult);
    
        results.push(currentFlipResult);
      }
  }
  function display20Images() {
    const results = [];
    // 5. Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
    for (let numOfFlip = 1; numOfFlip <= 20; numOfFlip++) {
      let result = coin.flip();
      result = coin.toHTML();
  
      let displaySection = document.createElement("div");
      displaySection.append(result);
  
      results.push(result);
      document.body.append(displaySection);
  
    }
}

    //displays image and string using the function
    // display20Flips();
    // display20Images();


    //displays the image and string with button.

    let flipStringButton = document.createElement("button");
    flipStringButton.innerHTML = "Display Flip Strings 20 times";
    document.body.append(flipStringButton);

    flipStringButton.addEventListener("click", display20Flips);

    let imgFlipButton = document.createElement("button");
    imgFlipButton.innerHTML = "Display Flip Images 20 times";
    document.body.append(imgFlipButton);

    imgFlipButton.addEventListener("click", display20Images);

