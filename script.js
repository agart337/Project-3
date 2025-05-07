// mouse interaction
let colors = ["#D32C33", "#EE8734", "#FDCE45", "#4ED58F", "#90CFC6", "#6D7BEC"];
let i = 0;

document.addEventListener('click', function (e) {
    i++;
    let x = e.pageX;
    let y = e.pageY;

    let span = document.createElement("span");
    span.classList.add("follower");
    span.style.top = y + "px";
    span.style.left = x + "px";
    span.style.backgroundColor = colors[i % colors.length];
    document.body.appendChild(span);

    // open links after delay in animation
    setTimeout(() => {
        span.remove();
    }, 10000);
});

let allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        setTimeout(() => {
            window.location = link.href;
        }, 1000);
    })
}


// image carousel
const images = ["../Tridha/building.jpeg", "../Tridha/class1.jpg", "../Tridha/music.jpeg", "../Tridha/cooking.png", "../Tridha/play1.png", "../Tridha/puppet show.jpg"];
let currentIndex = 0;

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("carouselTridha").src = images[currentIndex];
}


// arrows
const wrapper = document.getElementById('imageWrapper');
const image = document.getElementById('carouselTridha');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

wrapper.addEventListener('mousemove', (e) => {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const isLeft = x < rect.width / 2;

    // Set position of the arrow directly under the cursor
    const arrow = isLeft ? prevArrow : nextArrow;
    arrow.style.left = `${x}px`;
    arrow.style.top = `${y}px`;
    arrow.style.opacity = 1;

    // Hide the other arrow
    (isLeft ? nextArrow : prevArrow).style.opacity = 0;
});

wrapper.addEventListener('mouseleave', () => {
    prevArrow.style.opacity = 0;
    nextArrow.style.opacity = 0;
});

prevArrow.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent event bubbling
    changeSlide(-1);
});

nextArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    changeSlide(1);
});