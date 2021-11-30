window.onload = function () {
  document.addEventListener('click', carousel);
  ////                         Carousel                      ////

	const nextSlider = document.querySelector('.carousel__arrow-next');
	let hideTimeoutId = null
	
	hideTimeoutId = setTimeout(() => {
    nextSlider.click()
  }, 4000)


  // CREATE CAROUSEL IMAGE

  const sliderMainList = document.querySelectorAll('[data-slider="main"]');
  Array.from(sliderMainList).map((sliderMain) => {
    const sliderBody = sliderMain.querySelector(
      '[data-slider="body"]'
    ).children;
    sliderBody[1].classList.add('second');
    sliderBody[sliderBody.length - 1].classList.add('last');
  });

  // CONTROL CAROUSEL

  function carousel({ target }) {
    if (target.closest('[data-slider="control"]')) {
      const sliderMain = target.closest('[data-slider="main"]');
      const sliderBody = sliderMain.querySelector(
        '[data-slider="body"]'
      ).children;
      const sliderBodyList = Array.from(sliderBody);
      const active = sliderMain.querySelector('.active');
      const last = sliderMain.querySelector('.last');
      const second = sliderMain.querySelector('.second');
      const activeId = sliderBodyList.indexOf(active);
      const lastId = sliderBodyList.indexOf(last);
      const secondId = sliderBodyList.indexOf(second);
      if (target.classList.contains('carousel__arrow-next')) {
        const newActiveId =
          activeId == 0 ? sliderBodyList.length - 1 : activeId - 1;
        const newLeftId = lastId == 0 ? sliderBodyList.length - 1 : lastId - 1;
        const newRightId =
          secondId == 0 ? sliderBodyList.length - 1 : secondId - 1;
        carouselRun(newActiveId, newLeftId, newRightId);
      } else if (target.classList.contains('carousel__arrow-prev')) {
        const newActiveId =
          activeId == sliderBodyList.length - 1 ? 0 : activeId + 1;
        const newLasttId = lastId == sliderBodyList.length - 1 ? 0 : lastId + 1;
        const newRightId =
          secondId == sliderBodyList.length - 1 ? 0 : secondId + 1;
        carouselRun(newActiveId, newLasttId, newRightId);
      }
      function carouselRun(newActiveId, newLasttId, newRightId) {
        sliderBodyList[activeId].classList.remove('active');
        sliderBodyList[lastId].classList.remove('last');
        sliderBodyList[secondId].classList.remove('second');
        sliderBodyList[newActiveId].classList.add('active');
        sliderBodyList[newLasttId].classList.add('last');
        sliderBodyList[newRightId].classList.add('second');
				clearTimeout(hideTimeoutId);
				hideTimeoutId = setTimeout(() => {
					nextSlider.click()
				}, 4000)
      }
    }
  }



};
