let colors = ["#D32C33", "#EE8734", "#FDCE45", "#4ED58F", "#90CFC6", "#6D7BEC"];
let i = 0;

document.onmousemove = function (e) {
    i++;
    let x = e.pageX;
    let y = e.pageY;

    console.log("hello")
    let span = document.createElement("span");
    span.classList.add("follower")
    span.style.top = y + "px";
    span.style.left = x + "px";
    span.style.backgroundColor = colors[i - 1]
    document.body.appendChild(span)

    if (i == colors.length) {
        i = 0
    }
    setTimeout(() => {
        span.remove();
    }, 1000);
}