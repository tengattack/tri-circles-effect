var circles = document.getElementsByClassName('tri-circles-bg-circle');
var tricircle = document.getElementsByClassName('tri-circles-bg')[0];
/* var angl = 0;
var t = setInterval(function () {
  angl += 10;
  if (angl >= 360) angl = 0;
  //tricircle.style.cssText = 'transform: rotate(' + angl + 'deg);';
  
  for (var i = 0; i < 3; i++) {
    var r = getRandomArbitrary(0, 12);
    var a = getRandomArbitrary(0, 12);
    var b = Math.sqrt(r * r - a * a);
    var lr = getRandomInt(0, 2);
    //var pos = getRandomInt(0, 3);
    var css;
    switch (i) {
    case 0:
      css = 'top:-' + a.toFixed(3) + '%;';
          + (lr ? 'left' : 'right') + ':-' + b.toFixed(3) + '%;';
      break;
    case 1:
      css = 'bottom:-' + a.toFixed(3) + '%;'
          + 'left:-' + b.toFixed(3) + '%;';
      break;
    case 2:
      css = 'bottom:-' + a.toFixed(3) + '%;'
          + 'right:-' + b.toFixed(3) + '%;';
      break;
    }
    circles[i].style.cssText = css;
  }
}, 200); */

var R = 12;
var thetas = [1.9, 3.6, 2.7];

function calcCssText(i) {
  var theta = thetas[i];
  theta += 0.1;
  if (theta > 2 * 3.14) {
    theta = 0;
  }
  thetas[i] = theta;
  
  var r = Math.sin(4 * theta);
  var x = R * r * Math.cos(theta);
  var y = R * r * Math.sin(theta);
  
  var abs_x = Math.abs(x);
  var abs_y = Math.abs(y);
  
  var cssText = ''
    + 'left:' + x.toFixed(3) + '%;'
    + 'top:' + (-y).toFixed(3) + '%;';
  return cssText;
}

var t = null;
function stop() {
  if (!t) {
    t = setInterval(function () {
      for (var i = 0; i < 3; i++) {
        circles[i].style.cssText = calcCssText(i);
      }
    }, 200);
  } else {
    clearInterval(t);
    t = null;
  }
}
//stop();

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
