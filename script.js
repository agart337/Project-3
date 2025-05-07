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
