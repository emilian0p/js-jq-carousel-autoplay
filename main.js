const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

const container = document.getElementById('img_container');
const secondContainer = document.getElementById('second-container');

for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.classList.add('d-none', 'w-100', 'ms_img');
    img.setAttribute('src', images[i]);
    container.append(img);

    const dot = document.createElement('div');
    dot.classList.add('point');
    secondContainer.append(dot);

    const innerDot = document.createElement('div');
    innerDot.classList.add('inner-point', 'd-none');
    dot.append(innerDot);

    if (i == 0) {
        img.classList.remove('d-none');
        img.classList.add('d-block');

        innerDot.classList.remove('d-none');
        innerDot.classList.add('d-block');
    }
}

const prev = document.getElementById('prev');
const next = document.getElementById('next');

let index = 0;

/* inserisco l'event listner ai bottoni */

prev.addEventListener('click', function () {
    index--;
    if (index == -1) {
        index = images.length - 1;
        container.children[0].classList.remove('d-block');
        container.children[0].classList.add('d-none');
        container.children[index].classList.remove('d-none');
        container.children[index].classList.add('d-block');

        secondContainer.children[0].firstChild.classList.remove('d-block');
        secondContainer.children[0].firstChild.classList.add('d-none');
        secondContainer.children[index].firstChild.classList.remove('d-none');
        secondContainer.children[index].firstChild.classList.add('d-block');
    } else {
        container.children[index + 1].classList.remove('d-block');
        container.children[index + 1].classList.add('d-none');
        container.children[index].classList.remove('d-none');
        container.children[index].classList.add('d-block');

        secondContainer.children[index + 1].firstChild.classList.remove('d-block');
        secondContainer.children[index + 1].firstChild.classList.add('d-none');
        secondContainer.children[index].firstChild.classList.remove('d-none');
        secondContainer.children[index].firstChild.classList.add('d-block');
    }
});

next.addEventListener('click', function () {
    index++;
    if (index == images.length) {
        index = 0;
        container.children[images.length - 1].classList.remove('d-block');
        container.children[images.length - 1].classList.add('d-none');
        container.children[index].classList.remove('d-none');
        container.children[index].classList.add('d-block');

        secondContainer.children[images.length - 1].firstChild.classList.remove('d-block');
        secondContainer.children[images.length - 1].firstChild.classList.add('d-none');
        secondContainer.children[index].firstChild.classList.remove('d-none');
        secondContainer.children[index].firstChild.classList.add('d-block');
    } else {
        container.children[index - 1].classList.remove('d-block');
        container.children[index - 1].classList.add('d-none');
        container.children[index].classList.remove('d-none');
        container.children[index].classList.add('d-block');

        secondContainer.children[index - 1].firstChild.classList.remove('d-block');
        secondContainer.children[index - 1].firstChild.classList.add('d-none');
        secondContainer.children[index].firstChild.classList.remove('d-none');
        secondContainer.children[index].firstChild.classList.add('d-block');
    }
});