var creative = {};

var cycle = 0;
var cycles = 2;

var scenecur = 1;
var scenenum = 5;

var delays = [
    100     // 0
    ,2900   // 1
    ,2900   // 2
    ,2900   // 3
    ,2900   // 3
    ,2900   // 3
  ];

/* Window onload handler. */
function preInit() {
  setupDom();
  init();
}

/* Initializes the ad components */
function setupDom() {
  creative.container = document.getElementById("container");
  var i;
  for(i = 1; i <= scenenum; i++) {
    creative['scene' + i] = document.getElementById("scene" + i);
  }
}

/* Ad initialisation. */
function init() { show(); }
/* Adds appropriate listeners at initialization time */

function tshow(){
  creative['scene' + 1].style.display = "block";
}
function show(){  
  if(scenecur <= scenenum){      
    creative['scene' + scenecur].style.display = "block";
    setTimeout(function(){ show(); }, (delays[scenecur]));
    ++scenecur;   
  }
  else{
    ++ cycle < cycles;
    console.log("cycle: " + cycle);

    if (cycle == cycles) { }
    else if(detectIE() === false){
      creative.container.className = "hidelement";
      setTimeout(function(){ checkcycle(); }, 600);  
    }
  }
}

function checkcycle(){  
  var i;
  for(i = 1; i <= scenenum; i++) {
    creative['scene' + i].style.display = "none";
  }
  scenecur = 1;
  creative.container.className = "contshow";
  setTimeout(function(){ show(); }, 400);
}

window.addEventListener('load', preInit);

function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}