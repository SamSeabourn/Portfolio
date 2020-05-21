// Hello, welcome to my hacked together portfolio.
// This was originally made just after I had finished my course and was a horrible combination of JQuery and a lack of sleep
// It has since been refactored (majorly) and has been lovingly crafted using vanilla CSS, JS and HTML.
// This being said there are still a few things that are a tad sloppy
// I am planning a major interactive portfolio in the near future so for now please enjoy browsing through what is currently here.
// <3 Sam


document.addEventListener("DOMContentLoaded", function () {
  /// Event listeners ///

  // Paralax Effect 
  window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  }, false)

  // Unicorn mode button
  var unicornModeButton = document.getElementById("unicornMode")
  unicornModeButton.addEventListener("click", () => {
    startUnicornMode()
  })

  // image hover
  var imageLinks = document.getElementsByClassName("imageLinks")
  for (let i = 0; i < imageLinks.length; i++) {
    var image = imageLinks[i]
    image.orginalSrc = imageLinks[i].src
    image.purpleSrc = getPurpleImageSrc(image.src)

    image.addEventListener("mouseover", ( event ) => {   
       event.target.src = event.target.purpleSrc
    
    }, false);
    image.addEventListener("mouseleave",( event ) =>{
        event.target.src = event.target.orginalSrc
    })

  }

  /// Animations ///
  // Slideshow
  var demoGBImages = ["images/demoGB4.jpg", "images/demoGB3.jpg", "images/demoGB2.jpg", "images/demoGB1.jpg"]
  var demoGBDisplayImage = document.getElementById("demoGBImages")
  var PRNKSTRImages = ["images/PRNKSTR4.jpg", "images/PRNKSTR3.jpg", "images/PRNKSTR2.jpg", "images/PRNKSTR1.jpg"]
  var PRNKSTRDisplayImage = document.getElementById("PRNKSTRImages")
  rotateThroughImages(demoGBDisplayImage, demoGBImages)
  rotateThroughImages(PRNKSTRDisplayImage, PRNKSTRImages)

  DillanYouSonOfABitch();

});

function rotateThroughImages(displayImage, imageArray) {
  var i = 0
  window.setInterval(() => {
    displayImage.src = imageArray[i]
    i++
    if (i === imageArray.length) i = 0
  }, 4700)
}

function getPurpleImageSrc(srcString) {
  var insertPossition = srcString.length -4
  return [srcString.slice(0, insertPossition), "Purp", srcString.slice(insertPossition)].join("")
}

function generateRainbowText(element) {
  var text = element.innerText;
  element.innerHTML = "";
  for (let i = 0; i < text.length; i += 1) {
    let charElem = document.createElement("span");
    charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
    charElem.innerHTML = text[i];
    element.appendChild(charElem);
  }
}


function startUnicornMode() {
  var pElements = document.querySelectorAll('p')
  var h1Elements = document.querySelectorAll('h1')
  var h2Elements = document.querySelectorAll('h2')

  //change all the images to unicorn
  var images = document.getElementsByTagName('img')
  for (let i = 0; i < images.length; i += 1) {
    let image = images[i];
    image.src = 'http://bestanimations.com/Animals/Mammals/Horses/unicorn/animated-unicorn-gif.gif';
  }

  //change bacground images to rainbow nonsence 
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(https://thumbs.gfycat.com/EmbarrassedLegitimateBullmastiff-size_restricted.gif)'

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // Make divs background change
  var allDivs = document.querySelectorAll('div')
  var index = 0;
  setInterval(function () {
    for (let i = 0; i < allDivs.length; i++) {
      var div = allDivs[i]
      div.style.backgroundColor = getRandomColor();
    }
  }, 2000)

  // make titles go all rainbow like
  for (let i = 0; i < pElements.length; i += 1) {
    generateRainbowText(pElements[i]);
  }
  for (let i = 0; i < h1Elements.length; i += 1) {
    generateRainbowText(h1Elements[i]);
  }
  for (let i = 0; i < h2Elements.length; i += 1) {
    generateRainbowText(h2Elements[i]);
  }
}

function DillanYouSonOfABitch(){
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



