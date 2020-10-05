var swiper = new Swiper('#container', {
            direction: 'vertical',
            slidesPerView: 1,
            mousewheel: true,
            pagination: {
                el: '.pager',
                clickable: true,
            },
        });

 var swiper = new Swiper('.poList1', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.btnR',
        prevEl: '.btnL',
      },
    });