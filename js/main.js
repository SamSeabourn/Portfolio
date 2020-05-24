var changeColorBtn1 = document.getElementById("changeColorOne")
var changeColorBtn2 = document.getElementById("changeColorTwo")

var colorOne, colorTwo;


changeColorBtn1.addEventListener("click", function(){
  var colorOneSVGArray = document.querySelectorAll('.color1')
  changeColors(colorOneSVGArray)
  updateBrowserColor(colorOne)
});

changeColorBtn2.addEventListener("click", function(){
  var colorTwoSVGArray = document.querySelectorAll('.color2')
  changeColors(colorTwoSVGArray)
});

function changeColors(svgArray, colorNumber) {
  var mediumColor = random_rgb()
  var darkColor = shiftColor(mediumColor, "shiftDown")
  var lightColor = shiftColor(mediumColor, "shiftUp" )
  if (colorNumber === "One") colorOne = mediumColor;
  if (colorNumber === "Two") colorTwo = mediumColor;

  for (let i = 0; i < svgArray.length; i++) {
    var color = svgArray[i]
    if (color.classList.contains("face1")){
      color.setAttribute('fill', lightColor)
    }
    else if (color1.classList.contains("face3")){
      color.setAttribute('fill', darkColor)
    }
    else {
      color.setAttribute('fill', mediumColor)
    }
  }
}

function random_rgb() {
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

function updateBrowserColor(color){
  var browserMetaData = document.getElementById('metaData')
  browserMetaData.content = color
}

function shiftColor(color ,upOrDown){
  var colorArray = color.substring(4).slice(0, -1).split(",")
  var newColor = []
  var range = 40
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

function dillanYouSonOfABitch(){
console.log(`
                                              @@@@@@@@@@@@@@@@@@@@@                                                                                  
                                            . ***/*,,*******/%##%(                                                                                  
                                            /#/***//*///////(##&%&                                                                                  
                                            % ////*****/***#@&%%%(                                                                                  
                                          ((,#%#(((#(/////(%#@@@@&                                                                                  
                                          .,/(#%%%#((#@@@@&@@@%#(&%/                                                                           *#/&@&
                                            */(#(((#%@@@@@@@@@&&&(%%%                                                                    *%%%&&(%&/&@@
.    .... *                                 ((%&%&&&@&&@@@&@@&%&&@%&%#                                                         ,//(%%&&&&&&@@@&&&&*(&@
........,****..                            ,##(#%&@@@@@@&&%&&&%(&&&&%##,                                                   /*/(#&&&&&&&&&&&&&&&&&&&&&&
...,,.,.......**,,                         ,####%&&&&@@@&%&&@&#((%##%%##                                               .%(#(%%%%%&&%&&&&&&&&&&&&&&&&&&
,,,,.......,/*/**,.*                        *&#%##%%&@@@@@@@&@%&%###%&&%/                                        ,*,.**%%%%%%%%%%%%%%&&&&&&&&&&&&&&&&&
,,.......,**.     ..,.                        %%%###%#&@&@@@&&%((###&@@%(*                                     *.,(#%%&%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&
........**,.      ..**..                       *%%####%#%%@&&&&%###&&&&@@#                                   .*,*%/%%%%%%#%%%%%%%%%%%%%%%&&&&&&%&&&&&&
,.,..,,,/,    ...,**/**,.                        /%&%#%#%#&%%&%%#%%&@%&%@                                 //&&&%%%%&%%%%%&%%&%%%%%%%%%%%%&&&&&&&&&&&&&
,.,,,,,*,,..,...,,*,..                            #%###(#%%%%%((##&@@@@@&                              ,,(%%%#&&%%&%%&&&&&%&&%%%%%%%%%%%%&&&&&&&&&&&&&
,,,,,****,*,.. .,,....   ,.                       ,(##%#(%#&%((##%@&&&&@.                         ,///**/##%%%%&#&%%%%&&&&&&&%%%%%%%%%%%%&&&&&&&&&&&&&
,,****,,,,........ ...   . ..                       ##( (%%%###%#&&@&%&&.                     //*///////****#%%%%&%&%%%%&&&&&%%&&&&%%%%&%&&&&&&&&&&&&&
////**,,,.,...,,,**,,   .  .*,                     . # (#%#(((#%&%&&@@&###(                /////*/**,****,,***%%%%%&%&&&&&&@&&%&&&&&&%&&&&&&&&&&&&&&&&
###//**,,.,,,*//**,.      ,.    .                   , /(########%&%%&&@#((##/.            ((////***,,,,,.,,,,***&%%&&&&&&&&@@&&&&&&&&&&&&&&&&&&&&&&&&&
%%#(//***,,*///,,.      /*.,.      .               ,  %((((((((#@&#%&@@*#((####(.        ,((/////*,, .****//(///(&&&&&&&@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&
%%##(//,**//(**.     */*./,.          ,         ., ##%#######(##%@&&&@@//#((((##(#      (###(////*,**////((#((#%#%&&&&&@&@@@@@&&&&&&&@&&&&&&&&&&&&&&&&
@%%(**//*/((,.     //*/*.             /%*     .**%%&%%%%%#%%%%%#%%&&&@%((((((/(((%%%(*(#(((((((//////(((#####%&&@@@@&&&&@@@@@@&&&&&@&@@@&&&&&&&&&&&&&&
&#/#(((*((/,..   ,/(/,  .             (&&%,   .  (&%%%%%###%%%%%&%&&@@&%#(((((///###/##/((///(#%##%%%%%%%&&&@@@@&#(&@&&@@@@@@@@&&@&@@@@@&&&&&&&&@&&&&&
@@@&%//#(/*.,..,/#/,...             . %&@@&&/  (@@%%######%%#%%%&&&@@@&%##(((/(((##((((((/(//**(#%#%#%%&@@@@&#/(##(#@@@@@@@@@@@&&@&@@@@@@&@&&&&&&&&@@@
@@%##((#/**,.,/%(/*,.               *%&@@@&@@@@@&#%##########%&@&@@@@@&&%%###((((((((((/**(#(%#((////((#((##(##(#(#%&@@@@@@@@@@@@@@@@@@@@@&&&&&&@&@@@@
@@&@&###/*,,/@%%/**,.           . ,(%&&@@&&&&&@&%##%###%%%%&&@&@@&@@@&&&&&%##((((##((((@@%%#((/*,,,*/(##%%#(///(((%&@@@@@@@@@@@@@@@@@@@@@@@&&&&@&@@@@@
@@@@&%%%#%@@@%%#/*,,,,.,,.....  /%%&&@@@@@@@%%%%#%%(###(%&@@&@@@@@@@&@@&&&%%%##%###(#&//(((#((/**/#####(%##(((#%&&@@@@@@@#...&@@@@@@@@@@@@@@@@@@@@@@@@
@@@@&&&@@@@@&%(((**,/**,,,,,,.@@@@@@@@@@@@@@&&&@&%##(#%&@@@@@@@@@@@@@@@@@@&&&%%%%#(((%#((((((/,,**/(#%&&#%###%&@@@@@@@@&,     (@@@@@@@@@@@@@@@&@@@@@@@
@@@@@@@@@@@&%%#####///****,%@@@@@@@@@@@@@@@@@@@@&%%###%@@@@@@@@@@@@@@@@@&@@@&&&%%%%%@&%###/*****((%&@%%&%#%@@@@@@@@@%.         #@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@&%&%%###(((*@@@@@@@@@@@@@@@@@@@@@@@@@&&&%%@@@@@@@@@@@@@@@@@@@@@@@@@@&&%@&&%##(***//(%&@%@@@@%@@@@@@@@/             .&@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@%%##(@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@&&@@@@@@@@@@@@@# @@@@@@@@@@@@@@@@@@@%#((((%%&@@@@@@@@@@@@@%*                  /@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&    @@@@@@@@@@@@&@&&%#%%&@@@@@@@@@@@@@%*                       .%@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@      #@@@@@@@@@@@@%#%%@@@@@@@@@@@%.                            ./@@@@@@@@@@@@@@@@@@@@
`)
console.log("%cLets team up!","font-size: 20px");
console.log("%chttps://www.linkedin.com/in/samseabourn 💬","color: blue; font-size: 20px");
}






