function initialize() {
  var colors = ['#A30C25', '#D8234A', '#ED7300', '#EAA300', '#77AF2B', '#0076AB'];
  var offsetFactor = 3;
  var updateInterval = 100;

  var glitch = document.querySelector('.glitch');
  var name = document.querySelector('#name');

  function animateNameShadow() {
    var shadowString = [];

    colors.some(function(item, i) {
      var offset = (i+1)*offsetFactor;
      shadowString.push(offset + 'px ' + offset + 'px ' + item);
      if ( i === 2 ) return true;
    });

    name.style.textShadow = shadowString.join(', ');
    colors.unshift(colors.pop());

    setTimeout(animateNameShadow, updateInterval);
  }

  function showAndHide() {
    var hiddenSeconds = Math.floor(Math.random() * 50) + 10;
    var shownSeconds = Math.floor(Math.random() * 15) + 5;
    setTimeout(function() {
      glitch.style.top = '0px';
      name.style.color = 'transparent';
      name.classList.remove('safe');
      updateInterval = 30;

      setTimeout(function() {
        glitch.style.top = '-1000%';
        name.style.color = 'white';
        name.classList.add('safe');
        updateInterval = 100;

        showAndHide();
      }, shownSeconds*100);
    }, hiddenSeconds*100);
  }

  showAndHide();
  animateNameShadow();
}

if (document.readyState != 'loading'){
  initialize();
} else {
  document.addEventListener('DOMContentLoaded', initialize);
}
