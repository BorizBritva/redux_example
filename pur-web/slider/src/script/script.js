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
            let width = sliderWidth/3 - 10;
            let offsetSlider = slidesBefore.length * sliderWidth/3;
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

            sliderList.style.width = `${sliderList.children.length * sliderWidth}px`;
            sliderList.style.transform = `translateX(${-offsetSlider}px)`;

            offsetLine = Number(sliderList.style.transform.match(/[-\d]/g).join(''));

        }

        createSliderList();

        /*document.querySelectorAll('.before').forEach(item => {
            sliderList.append(item);
        });

        console.log(sliderList.children[9])*/

        slideToLeft = (speed) => {
            let step = offsetLine += speed;
            sliderList.style.transform = `translateX(${step}px)`;
            offsetLine = Number(sliderList.style.transform.match(/[-\d]/g).join(''));
            console.log(offsetLine);
        }

        arraLeft.addEventListener('click', () => {

            let number = 0;

            let timer = setInterval(function() {
                if (counter < sliderWidth + 10) {
                    slideToLeft(number);
                    number-=1;
                    counter+=43;
                } else {
                    clearInterval(timer);
                    counter = 0;
                }
            }, 1);

        })
}
