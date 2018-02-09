'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 65);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];

    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  // ctx.fillText('Худшее время: ' + max.toFixed(2) + 'mc y игрока ' + names[maxIndex], 120, 90);

  var barWidth = 40;
  var indent = 100;
  var initialX = 150;
  var initialY = 250;
  var lineHeight = 15;
  var colorBarI = 'rgba(255, 0, 0, 1)';
  var colorText = 'rgb(0, 0, 0)';

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = colorText;
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
    ctx.fillText(times[i].toFixed(), initialX + indent * i, initialY - lineHeight - times[i] * step);

    if (names[i] === 'Вы') {
      ctx.fillStyle = colorBarI;
    } else {
      ctx.fillStyle = 'rgba(25, 45, 251,' + Math.random() + ')';
    }
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * -step);
  }

};
