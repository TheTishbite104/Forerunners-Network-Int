(function () {
  var slideCount = 10;
  var currentIndex = 0;
  var track = document.getElementById('slider-track');
  var counterEl = document.getElementById('slider-counter');
  var prevBtn = document.querySelector('.slider-prev');
  var nextBtn = document.querySelector('.slider-next');
  var thumbs = document.querySelectorAll('.slider-thumb');

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function updateCounter() {
    if (counterEl) {
      counterEl.textContent = pad(currentIndex + 1) + ' / ' + pad(slideCount);
    }
  }

  function updateThumbs() {
    thumbs.forEach(function (thumb, i) {
      thumb.classList.toggle('active', i === currentIndex);
    });
  }

  function showSlide(index) {
    currentIndex = ((index % slideCount) + slideCount) % slideCount;
    if (track) {
      track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    }
    updateCounter();
    updateThumbs();
  }

  function goNext() {
    showSlide(currentIndex + 1);
  }

  function goPrev() {
    showSlide(currentIndex - 1);
  }

  if (prevBtn) prevBtn.addEventListener('click', goPrev);
  if (nextBtn) nextBtn.addEventListener('click', goNext);

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var i = parseInt(thumb.getAttribute('data-index'), 10);
      if (!isNaN(i)) showSlide(i);
    });
  });

  showSlide(0);
})();
