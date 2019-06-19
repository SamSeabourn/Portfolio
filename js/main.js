console.log('JS running');

$(document).ready(function() {
  console.log("J-Quizzle ready");

  window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for (let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  }, false)

  $(function() {
    var dataArray = new Array();
    dataArray[0] = "images/demoGB4.jpg";
    dataArray[1] = "images/demoGB2.jpg";
    dataArray[2] = "images/demoGB3.jpg";
    dataArray[3] = "images/demoGB1.jpg";
    var thisId = 0;
    window.setInterval(function() {
      $('#demoGBImages').attr('src', dataArray[thisId]);
      thisId++;
      if (thisId == 4) thisId = 0;
    }, 4500);
  });

  $(function() {
    var dataArray = new Array();
    dataArray[0] = "images/PRNKSTR2.jpg";
    dataArray[1] = "images/PRNKSTR3.jpg";
    dataArray[2] = "images/PRNKSTR4.jpg";
    dataArray[3] = "images/PRNKSTR1.jpg";
    var thisId = 0;
    window.setInterval(function() {
      $('#PRNKSTRImages').attr('src', dataArray[thisId]);
      thisId++;
      if (thisId == 4) thisId = 0;
    }, 4600);
  });

  $(function() {
    var dataArray = new Array();
    dataArray[0] = "images/factroll2.jpg";
    dataArray[1] = "images/factroll3.jpg";
    dataArray[2] = "images/factroll1.jpg";
    var thisId = 0;
    window.setInterval(function() {
      $('#factrollImages').attr('src', dataArray[thisId]);
      thisId++;
      if (thisId == 3) thisId = 0;
    }, 4700);
  });


  $("#web1").hover(function() {
    $(this).attr('src', 'images/webSlimPurp.svg');
  }, function() {
    $(this).attr('src', 'images/webSlim.svg');
  });
  $("#git1").hover(function() {
    $(this).attr('src', 'images/gitSlimPurp.svg');
  }, function() {
    $(this).attr('src', 'images/gitSlim.svg');
  });


  $("#web2").hover(function() {
    $(this).attr('src', 'images/webPurp.svg');
  }, function() {
    $(this).attr('src', 'images/web.svg');
  });
  $("#git2").hover(function() {
    $(this).attr('src', 'images/gitPurp.svg');
  }, function() {
    $(this).attr('src', 'images/git.svg');
  });

  $("#web3").hover(function() {
    $(this).attr('src', 'images/webSlimPurp.svg');
  }, function() {
    $(this).attr('src', 'images/webSlim.svg');
  });
  $("#git3").hover(function() {
    $(this).attr('src', 'images/gitSlimPurp.svg');
  }, function() {
    $(this).attr('src', 'images/gitSlim.svg');
  });
  $("#linkedInSquare").hover(function() {
    $(this).attr('src', 'images/linkedInSquarePurp.svg');
  }, function() {
    $(this).attr('src', 'images/linkedInSquare.svg');
  });
  $("#githubSquare").hover(function() {
    $(this).attr('src', 'images/gitSquarePurp.svg');
  }, function() {
    $(this).attr('src', 'images/gitSquare.svg');
  });
  $("#emailSquare").hover(function() {
    $(this).attr('src', 'images/emailSquarePurp.svg');
  }, function() {
    $(this).attr('src', 'images/emailSquare.svg');
  });

  $("#unicornMode").click(function() {
    console.log("clicked");
    unicornMode()
  });


});





const unicornMode = () => {
  let images = document.getElementsByTagName('img')
  for (let i = 0; i < images.length; i += 1) {
    let image = images[i];
    image.src = 'http://bestanimations.com/Animals/Mammals/Horses/unicorn/animated-unicorn-gif.gif';
  }
  $('body').css("background-image", "url('https://thumbs.gfycat.com/EmbarrassedLegitimateBullmastiff-size_restricted.gif')")

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  var arr = $('div')
  var index = 0;
  setInterval(function() {
    $('div').css('background-color', getRandomColor());
    console.log(arr[index++ % arr.length]);
  }, 2000)

  var elements = $("p, h1, h2, h3, h4, h5, h6")
  for (let i = 0; i < elements.length; i += 1) {
    generateRainbowText(elements[i]);
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
}
