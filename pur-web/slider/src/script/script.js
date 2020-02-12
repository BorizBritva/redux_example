window.onload = () => {

    let sliderWrap = document.querySelector('.slider-line'),
        sliderList = document.querySelector('.slider-line__list'),
        slidesNodes = document.querySelectorAll('.slider-line__slide'),
        arraLeft = document.querySelector('.arrow-left'),
        arraRight = document.querySelector('.arrow-right'),
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
            let offsetSlider = slidesBefore.length * width; // width replace sliderWidth/3
            step = width;

            slidesBefore.forEach((item, i) => {
                sliderList.insertBefore(item, sliderList.children[i]);
            })

            slidesAfter.forEach((item, i) => {
                sliderList.append(item);
            })

            slidesBefore = document.querySelectorAll('.before');
            slidesAfter = document.querySelectorAll('.after');

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

        arraLeft.addEventListener('click', () => {

            let step = 10;

            let timer = setInterval(function() {
                if (counter < sliderWidth/3) {
                    slideToLeft(step);
                    counter+=10;
                } else {
                    clearInterval(timer);
                    counter = 0;
                    updateSliderLeft(offsetLine, sliderList, sliderWidth);
                }
            }, 1);

        })

        arraRight.addEventListener('click', () => {

            let step = 10;

            let timer = setInterval(function() {
                if (counter < sliderWidth/3) {
                    slideToRight(step);
                    counter+=10;
                } else {
                    clearInterval(timer);
                    counter = 0;
                    updateSliderRight(offsetLine, sliderList, sliderWidth);
                }
            }, 1);

        })

}
