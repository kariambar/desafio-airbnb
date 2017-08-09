  var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    range: {
      'min': 0,
      'max': 100
    }
  });