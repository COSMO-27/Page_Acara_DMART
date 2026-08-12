const images = document.querySelectorAll('.images-wrapper img');

    let current = 0;

    images[current].classList.add('active');

    setInterval(() => {
        images[current].classList.remove('active');

        current++;

        if (current >= images.length) {
            current = 0;
        }

        images[current].classList.add('active');
    }, 5000);