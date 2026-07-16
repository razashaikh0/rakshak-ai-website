const launch = new Date(
    "August 1, 2026 17:00:00"
).getTime();

setInterval(() => {

    const now = new Date().getTime();

    const gap = launch - now;

    const days = Math.floor(
        gap / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (gap % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (gap % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (gap % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);
