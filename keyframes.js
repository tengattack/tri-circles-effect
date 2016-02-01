
var R = 12;
var thetas = [1.8, 3.5, 2.6];

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

// 63 ~ 3.14 * 20
var css = '';
for (k = 0; k < 3; k++) {
css += '@keyframes circle' + (k + 1).toString() +  ' {\n';
for (var i = 0; i <= 63; i++) {
  var p;
  if (i == 0) {
    p = '0%';
  } else if (i == 63) {
    p = '100%';
  } else {
    p = (i * 100 / 63).toFixed(3) + '%';
  }
  css += '  ' + p + ' { ' + calcCssText(k) + ' }\n';
}
css += '}\n\n';
}

console.log(css);
