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

	// Tech bar Hover DemoGB

  $(".html1").hover(function() {
    $(this).attr('src', 'images/htmlPurp.svg');
		$('#techused1').text("HTML 5")
  }, function() {
    $(this).attr('src', 'images/html.svg');
		$('#techused1').text("")
  });
  $(".css1").hover(function() {
    $(this).attr('src', 'images/CSSPurp.svg');
		$('#techused1').text("CSS")
  }, function() {
    $(this).attr('src', 'images/CSS.svg');
		$('#techused1').text("")
  });
  $(".js1").hover(function() {
    $(this).attr('src', 'images/jsPurp.svg');
		$('#techused1').text("JavaScript")
  }, function() {
    $(this).attr('src', 'images/js.svg');
		$('#techused1').text("")
  });
  $(".svg1").hover(function() {
    $(this).attr('src', 'images/svgPurp.svg');
		$('#techused1').text("Custom SVG Graphics")
  }, function() {
    $(this).attr('src', 'images/svg.svg');
		$('#techused1').text("")
  });
  $(".ai1").hover(function() {
    $(this).attr('src', 'images/aiPurp.svg');
		$('#techused1').text("Adobe Illustrator")
  }, function() {
    $(this).attr('src', 'images/ai.svg');
		$('#techused1').text("")
  });
  $(".heroku1").hover(function() {
    $(this).attr('src', 'images/herokuPurp.svg');
		$('#techused1').text("Heroku Cloud Platform")
  }, function() {
    $(this).attr('src', 'images/heroku.svg');
		$('#techused1').text("")
  });
  $(".github1").hover(function() {
    $(this).attr('src', 'images/githubPurp.svg');
		$('#techused1').text("Github Version Control")
  }, function() {
    $(this).attr('src', 'images/github.svg');
		$('#techused1').text("")
  });
  $(".node1").hover(function() {
    $(this).attr('src', 'images/nodePurp.svg');
		$('#techused1').text("Node.js Server")
  }, function() {
    $(this).attr('src', 'images/node.svg');
		$('#techused1').text("")
  });
  $(".express1").hover(function() {
    $(this).attr('src', 'images/expressPurp.svg');
		$('#techused1').text("Express.js Framework")
  }, function() {
    $(this).attr('src', 'images/express.svg');
		$('#techused1').text("")
  });
  $(".cloudinary1").hover(function() {
    $(this).attr('src', 'images/cloudinaryPurp.svg');
		$('#techused1').text("Cloudinary File Storage")
  }, function() {
    $(this).attr('src', 'images/cloudinary.svg');
		$('#techused1').text("")
  });
  $(".mongo1").hover(function() {
    $(this).attr('src', 'images/mongoPurp.svg');
		$('#techused1').text("Mongo.db NoSQL Database")
  }, function() {
    $(this).attr('src', 'images/mongo.svg');
		$('#techused1').text("")
  });
	// Tech bar Hover PRNKSTR

  $(".html2").hover(function() {
    $(this).attr('src', 'images/htmlPurp.svg');
		$('#techused2').text("HTML 5")
  }, function() {
    $(this).attr('src', 'images/html.svg');
		$('#techused2').text("")
  });
  $(".css2").hover(function() {
    $(this).attr('src', 'images/CSSPurp.svg');
		$('#techused2').text("CSS")
  }, function() {
    $(this).attr('src', 'images/CSS.svg');
		$('#techused2').text("")
  });
  $(".js2").hover(function() {
    $(this).attr('src', 'images/jsPurp.svg');
		$('#techused2').text("JavaScript")
  }, function() {
    $(this).attr('src', 'images/js.svg');
		$('#techused2').text("")
  });
  $(".svg2").hover(function() {
    $(this).attr('src', 'images/svgPurp.svg');
		$('#techused2').text("Custom SVG Graphics")
  }, function() {
    $(this).attr('src', 'images/svg.svg');
		$('#techused2').text("")
  });
  $(".ai2").hover(function() {
    $(this).attr('src', 'images/aiPurp.svg');
		$('#techused2').text("Adobe Illustrator")
  }, function() {
    $(this).attr('src', 'images/ai.svg');
		$('#techused2').text("")
  });
  $(".heroku2").hover(function() {
    $(this).attr('src', 'images/herokuPurp.svg');
		$('#techused2').text("Heroku Cloud Platform")
  }, function() {
    $(this).attr('src', 'images/heroku.svg');
		$('#techused2').text("")
  });
  $(".github2").hover(function() {
    $(this).attr('src', 'images/githubPurp.svg');
		$('#techused2').text("Github Version Control")
  }, function() {
    $(this).attr('src', 'images/github.svg');
		$('#techused2').text("")
  });
  $(".ruby2").hover(function() {
    $(this).attr('src', 'images/rubyPurp.svg');
		$('#techused2').text("Ruby")
  }, function() {
    $(this).attr('src', 'images/ruby.svg');
		$('#techused2').text("")
  });
  $(".react2").hover(function() {
    $(this).attr('src', 'images/reactPurp.svg');
		$('#techused2').text("React.js Framework")
  }, function() {
    $(this).attr('src', 'images/react.svg');
		$('#techused2').text("")
  });
  $(".rails2").hover(function() {
    $(this).attr('src', 'images/railsPurp.svg');
		$('#techused2').text("Ruby On Rails Server")
  }, function() {
    $(this).attr('src', 'images/rails.svg');
		$('#techused2').text("")
  });
  $(".jquery2").hover(function() {
    $(this).attr('src', 'images/jqueryPurp.svg');
		$('#techused2').text("jQuery JavaScript Libruary")
  }, function() {
    $(this).attr('src', 'images/jquery.svg');
		$('#techused2').text("")
  });
  $(".crx2").hover(function() {
    $(this).attr('src', 'images/crxPurp.svg');
		$('#techused2').text("Google Chrome Extension")
  }, function() {
    $(this).attr('src', 'images/crx.svg');
		$('#techused2').text("")
  });
	// Rails 3

  $(".html3").hover(function() {
    $(this).attr('src', 'images/htmlPurp.svg');
		$('#techused3').text("HTML 5")
  }, function() {
    $(this).attr('src', 'images/html.svg');
		$('#techused3').text("")
  });
  $(".css3").hover(function() {
    $(this).attr('src', 'images/CSSPurp.svg');
		$('#techused3').text("CSS")
  }, function() {
    $(this).attr('src', 'images/CSS.svg');
		$('#techused3').text("")
  });
  $(".js3").hover(function() {
    $(this).attr('src', 'images/jsPurp.svg');
		$('#techused3').text("JavaScript")
  }, function() {
    $(this).attr('src', 'images/js.svg');
		$('#techused3').text("")
  });
  $(".svg3").hover(function() {
    $(this).attr('src', 'images/svgPurp.svg');
		$('#techused3').text("Custom SVG Graphics")
  }, function() {
    $(this).attr('src', 'images/svg.svg');
		$('#techused3').text("")
  });
  $(".ai3").hover(function() {
    $(this).attr('src', 'images/aiPurp.svg');
		$('#techused3').text("Adobe Illustrator")
  }, function() {
    $(this).attr('src', 'images/ai.svg');
		$('#techused3').text("")
  });
  $(".heroku3").hover(function() {
    $(this).attr('src', 'images/herokuPurp.svg');
		$('#techused3').text("Heroku Cloud Platform")
  }, function() {
    $(this).attr('src', 'images/heroku.svg');
		$('#techused3').text("")
  });
  $(".github3").hover(function() {
    $(this).attr('src', 'images/githubPurp.svg');
		$('#techused3').text("Github Version Control")
  }, function() {
    $(this).attr('src', 'images/github.svg');
		$('#techused3').text("")
  });
  $(".ruby3").hover(function() {
    $(this).attr('src', 'images/rubyPurp.svg');
		$('#techused3').text("Ruby")
  }, function() {
    $(this).attr('src', 'images/ruby.svg');
		$('#techused3').text("")
  });
  $(".react3").hover(function() {
    $(this).attr('src', 'images/reactPurp.svg');
		$('#techused3').text("React.js Framework")
  }, function() {
    $(this).attr('src', 'images/react.svg');
		$('#techused3').text("")
  });
  $(".rails3").hover(function() {
    $(this).attr('src', 'images/railsPurp.svg');
		$('#techused3').text("Ruby On Rails Server")
  }, function() {
    $(this).attr('src', 'images/rails.svg');
		$('#techused3').text("")
  });
  $(".azure3").hover(function() {
    $(this).attr('src', 'images/azurePurp.svg');
		$('#techused3').text("Microsoft Azure Web Services")
  }, function() {
    $(this).attr('src', 'images/azure.svg');
		$('#techused3').text("")
  });


  $("#unicornMode").click(function() {
    unicornMode()
  });
	//
	// $("#icons").hover(function() {
	// 	$data = $(this).attr('alt')
	// 	$('#techused3').text($data)
	// }, function() {
  //   // $("techused1") = "";
  // });

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
