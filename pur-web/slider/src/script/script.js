/*
1 - для адаптива необходимо вычислять ширину и шаг не через RegExp
2 - повесить на клики значения false при многократных нажатиях (либо условие выхода из функции)
3 - оптимизировать код и сформировать класс из имеющейся логики
*/


window.onload = () => {

    let sliderWrap = document.querySelector('.slider-line'),
        sliderList = document.querySelector('.slider-line__list'),
        slidesNodes = document.querySelectorAll('.slider-line__slide'),
        arrowLeft = document.querySelector('.arrow-left'),
        arrowRight = document.querySelector('.arrow-right'),
        dotsWrap = document.querySelector('.sliderDots'),
        dotsActive = 0,
        sliderWidth = sliderWrap.offsetWidth,
        offsetLine = 0,
        step = 0,
        counter = 0,
        slidesBefore = [],
        slidesAfter = [];

        createBefore = () => {
            slidesNodes.forEach((item, i) => {
                slidesBefore.push(item.cloneNode(true));
            })
        }

        createAfter = () => {
            slidesNodes.forEach((item, i) => {
                slidesAfter.push(item.cloneNode(true));
            })
        }

        createBefore();
        createAfter();

        slidesBefore.forEach( item => {
            item.classList.add('before');
        })

        slidesAfter.forEach( item => {
            item.classList.add('after');
        })

        createSliderList = () => {
            let width = sliderWidth/3; // quantity slides
            let currentDots = slidesNodes.length;
            let offsetSlider = slidesBefore.length * width; // width replace sliderWidth/3
            step = width;

            for (let i = 0; i < currentDots; i++ ) {

                let dots = document.createElement('span');

                if (i == 0 ) {
                    dots.classList.add('slider-dots');
                    dots.classList.add('active-dots');
                } else {
                    dots.classList.add('slider-dots');
                }

                dotsWrap.append(dots);
            }

            slidesBefore.forEach((item, i) => {
                sliderList.insertBefore(item, sliderList.children[i]);
            })

            slidesAfter.forEach((item, i) => {
                sliderList.append(item);
            })

            //slidesBefore = document.querySelectorAll('.before');
            //slidesAfter = document.querySelectorAll('.after');




            document.querySelectorAll('.slider-line__slide').forEach((item, i) => {

                item.style.padding = `5px`;
                item.style.width = `${width}px`;
            })

            sliderList.style.width = `${sliderList.children.length * width}px`; // width replace sliderWidth
            sliderList.style.transform = `translateX(${-offsetSlider}px)`;

            offsetLine = Number(sliderList.style.transform.match(/[-\d]/g).join(''));  // стоит поправить, для адаптива

        }

        createSliderList();

        slideToLeft = (step) => {
            let speed = offsetLine - step;
            sliderList.style.transform = `translateX(${speed}px)`;
            offsetLine = Number(sliderList.style.transform.match(/[-\d]/g).join(''));  // стоит поправить, для адаптива
        }

        slideToRight = (step) => {
            let speed = offsetLine + step;
            sliderList.style.transform = `translateX(${speed}px)`;
            offsetLine = Number(sliderList.style.transform.match(/[-\d]/g).join(''));  // стоит поправить, для адаптива
        }

        updateSliderLeft = (offset, slider, wrapWidth) => {

            let difference = slider.offsetWidth - wrapWidth;
            let slideWidth = slider.offsetWidth/slider.children.length;
            let comparison = -(difference - slideWidth);

            if (offset == comparison) {
                offset = -((document.querySelectorAll('.before').length * slideWidth) - (slideWidth * 4)); // 4 - quantity slides + 1(ended slide)
                slider.style.transform = `translateX(${offset}px)`;
                offsetLine = offset;
            }
        }

        updateSliderRight = (offset, slider, wrapWidth) => {

            let difference = slider.offsetWidth - wrapWidth;
            let slideWidth = slider.offsetWidth/slider.children.length;
            let comparison = -(wrapWidth/3); // 3 -  quantity slides

            if (offset == comparison) {
                offset = -((document.querySelectorAll('.after').length + 1) * slideWidth); // 2 - quantity slides - 1(start slide)
                slider.style.transform = `translateX(${offset}px)`;
                offsetLine = offset;
            }
        }

        arrowRight.addEventListener('click', () => {

            let step = 20;
            let dots = document.querySelectorAll('.slider-dots');

            let timer = setInterval(() => {
                if (counter < sliderWidth/3) {
                    slideToLeft(step);
                    counter+=20;
                } else {

                    clearInterval(timer);
                    dots[dotsActive].classList.remove('active-dots');

                    switch(dotsActive) {
                        case dots.length - 1:
                            dotsActive = -1;
                        default:
                            dotsActive += 1;
                            dots[dotsActive].classList.add('active-dots');
                    }

                    counter = 0;
                    updateSliderLeft(offsetLine, sliderList, sliderWidth);
                }
            }, 1);

        })

        arrowLeft.addEventListener('click', () => {

            let step = 20;
            let dots = document.querySelectorAll('.slider-dots');

            let timer = setInterval(() => {
                if (counter < sliderWidth/3) {
                    slideToRight(step);
                    counter+=20;
                } else {
                    clearInterval(timer);
                    dots[dotsActive].classList.remove('active-dots');

                    switch(dotsActive) {
                        case 0:
                            dotsActive = dots.length;
                        default:
                            dotsActive -= 1;
                            dots[dotsActive].classList.add('active-dots');
                    }

                    counter = 0;
                    updateSliderRight(offsetLine, sliderList, sliderWidth);
                }
            }, 1);

        })

        document.querySelectorAll('.slider-dots').forEach( (item, i) => {
            let step = 20;

            item.addEventListener('click', () => {

                    if (i > dotsActive) {

                        let timer = setInterval(() => {
                            if (counter < (i-dotsActive) * sliderWidth/3) {
                                slideToLeft(step);
                                counter+=20;
                            } else {

                                clearInterval(timer);
                                counter = 0;
                                updateSliderLeft(offsetLine, sliderList, sliderWidth);
                                document.querySelectorAll('.slider-dots')[dotsActive].classList.remove('active-dots');
                                document.querySelectorAll('.slider-dots')[i].classList.add('active-dots');
                                dotsActive = i;
                            }
                        }, 1);
                    }

                    if (i < dotsActive) {

                        let timer = setInterval(() => {
                            if (counter < (dotsActive-i) * sliderWidth/3) {
                                slideToRight(step);
                                counter+=20;
                            } else {

                                clearInterval(timer);
                                counter = 0;
                                updateSliderLeft(offsetLine, sliderList, sliderWidth);
                                document.querySelectorAll('.slider-dots')[dotsActive].classList.remove('active-dots');
                                document.querySelectorAll('.slider-dots')[i].classList.add('active-dots');
                                dotsActive = i;
                            }
                        }, 1);
                    }


            })
        })

}
