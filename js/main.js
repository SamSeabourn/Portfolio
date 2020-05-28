//Tile Array
var allTiles = document.getElementsByClassName("pnt") // pnt stands for paintable. Trying to reduce the size of the HTML

//Static Colors
var staticColorOneElements = document.getElementsByClassName("staticColorOne")
var staticColorTwoElements = document.getElementsByClassName("staticColorTwo")

// Colors 
var colorIdArray = []
var color0 = { face1 : "", face2 : "", face3 : "" }
var color1 = { face1 : "", face2 : "", face3 : "" }
var color2 = { face1 : "", face2 : "", face3 : "" }
var selectedColor = null

// Loader
var loaderDiv = document.getElementById('fadeIn')

// buttons
var changeColorOneBtn = document.getElementById("changeColorOne") 
var changeColorTwoBtn = document.getElementById("changeColorTwo")
var removeColorBrushBtn = document.getElementById("removeColorBrush")
var selectColorOneBrushBtn = document.getElementById("selectColorOneBrush" )
var selectColorTwoBrushBtn = document.getElementById("selectColorTwoBrush")

// Event Listeners
function initializeTileEvents(allTiles) {
    for (let i = 0; i < allTiles.length; i++) {
        allTiles[i].addEventListener("mouseover",( event ) => {
            if(event.buttons == 1 || event.buttons == 3) {
                drawColors(selectedColor, event.target )
            }
        });

        allTiles[i].addEventListener('touchmove',( event ) => {
            drawColors(selectedColor, event.target ) // alert pageX coordinate of touch point
        }, false)

    }
}


function initializeChangeColorOneButton() {
    changeColorOneBtn.addEventListener("click", ( event ) => {
        initializeColor(color1, randomRGB())
        initializeStaticColors(staticColorOneElements)
        initializeStaticColors(staticColorTwoElements)
        
    })
}
function initializeChangeColorTwoButton() {
    changeColorTwoBtn.addEventListener("click", ( event ) => {
        initializeColor(color2, randomRGB())
        initializeStaticColors(staticColorOneElements)
        initializeStaticColors(staticColorTwoElements)
    })
}

function initializeSelectColorOneBrushBtn() {
    selectColorOneBrushBtn.addEventListener("click", ( event ) => {
        event.target.setAttribute("stroke-width", "2px")
        event.target.setAttribute("stroke", "rgb(0,0,0)")
        event.target.setAttribute("opacity", "1")
        event.target.setAttribute("fill", "rgba(0,0,0,0)")
        selectedColor = color1
    })
}

function initializeSelectColorOneBrushBtn() {
    selectColorTwoBrushBtn.addEventListener("click", ( event ) => {
        event.target.setAttribute("stroke-width", "2px")
        event.target.setAttribute("stroke", "rgb(0,0,0)")
        event.target.setAttribute("opacity", "1")
        event.target.setAttribute("fill", "rgba(0,0,0,0)")
        selectedColor = color2
    })
}

function initializeStaticColors(){
    for (let i = 0; i < staticColorOneElements.length; i++) {
        renderWithShading(color1, staticColorOneElements[i])
    }
    for (let i = 0; i < staticColorTwoElements.length; i++) {
        renderWithShading(color2, staticColorTwoElements[i])
    }
}




// Color functions
// function changeColors(svgArray, color) {
//     var mediumColor = color
//     var darkColor = shiftColor(mediumColor, "shiftDown")
//     var lightColor = shiftColor(mediumColor, "shiftUp" )
  
//     for (let i = 0; i < svgArray.length; i++) {
//       var color = svgArray[i]
     
//     }
//   }

  function renderWithShading(color, svgElement) {
     if (svgElement.classList.contains("f1")){
        svgElement.setAttribute('fill', color.face1)
        svgElement.setAttribute('stroke', color.face1)
        svgElement.setAttribute('stroke-width', "0px")
      }
      else if (svgElement.classList.contains("f3")){
        svgElement.setAttribute('fill', color.face3)
        svgElement.setAttribute('stroke', color.face3)
        svgElement.setAttribute('stroke-width', "0px")
      }
      else {
        svgElement.setAttribute('fill', color.face2)
        svgElement.setAttribute('stroke', color.face2)
        svgElement.setAttribute('stroke-width', "0px")
      }
  }
  
  function randomRGB() {
      var colors = []
      var randomIndex = Math.floor(Math.random() * 3); // returns random index to make brighter color
      for (let i = 0; i < 3; i++) {
        if (i === randomIndex) {
          colors.push(randomInt(70, 255)) 
        } else {
          colors.push(randomInt(0, 255))
        } 
      }
      return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`
  }
  
  function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function drawColors(selectedColor, tile){
    if (selectedColor == null) return
    if (tile.classList.contains("f1")){
        tile.setAttribute('fill', selectedColor.face1)
        tile.setAttribute('stroke', selectedColor.face1)
      }
      else if (tile.classList.contains("f3")){
        tile.setAttribute('fill', selectedColor.face3)
        tile.setAttribute('stroke', selectedColor.face3)
      }
      else {
        tile.setAttribute('fill', selectedColor.face2)
        tile.setAttribute('stroke', selectedColor.face2)
      }
}


function redrawTiles(){
    for (let i = 0; i < allTiles.length; i++) {
       renderWithShading(color0 ,allTiles[i])    
    }
}

function initializeColor(colorOjbect, faceTwoRBG){
    colorOjbect.face2 = faceTwoRBG;
    colorOjbect.face3 = shiftColor(faceTwoRBG, "shiftDown")
    colorOjbect.face1 = shiftColor(faceTwoRBG, "shiftUp" )
}

function fadeLoader() {
    console.log(loaderDiv)
    loaderDiv.classList.add("ready");
    setTimeout( () => { loaderDiv.remove() }, 3000);
}

initializeColor(color0, "rgb(172,172,172)");
initializeColor(color1, randomRGB());
initializeColor(color2, randomRGB());

redrawTiles();

initializeStaticColors(staticColorOneElements);
initializeStaticColors(staticColorTwoElements);

initializeTileEvents(allTiles);
initializeChangeColorOneButton();
initializeChangeColorTwoButton();
initializeSelectColorOneBrushBtn();
fadeLoader();


// function updateColors(rgbValue){
//     darkColor = shiftColor(mediumColor, "shiftDown")
//     lightColor = shiftColor(mediumColor, "shiftUp" )
// }




// var changeColorBtn1 = document.getElementById("changeColorOne")
// var changeColorBtn2 = document.getElementById("changeColorTwo")


// changeColorBtn1.addEventListener("click", function(){
//   var colorOneSVGArray = document.querySelectorAll('.color')
//   changeColors(colorOneSVGArray)
// });

// changeColorBtn2.addEventListener("click", function(){
//   var colorTwoSVGArray = document.querySelectorAll('.color2')
//   changeColors(colorTwoSVGArray)
// });



function shiftColor(color ,upOrDown){
  var colorArray = color.substring(4).slice(0, -1).split(",")
  var newColor = []
  var range = 80
  var shiftDown;
  if (upOrDown !== "shiftUp") shiftDown = true;

  for (let i = 0; i < colorArray.length; i++) {
    var color = parseInt(colorArray[i])
    if (shiftDown){
      if (color - range < 0 ) {
        newColor.push(0)
      } else {
        newColor.push(color - range)
      }
    } else {
      if (color + range > 255 ) {
        newColor.push(255)
      } else {
        newColor.push(color + range)
      }
    }
  }
  return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`
}

// changeColors(allTiles, "rgb(172,172,172)") //Setting to grey

















