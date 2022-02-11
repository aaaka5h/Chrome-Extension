const countdown = () => {
    const countDate = new Date("May 1, 2022 00:00:00");
    const currDate = new Date().getTime();
    const timeRemaining = countDate - currDate;

    // time vars
    const ms = 1
    const second = 1000 * ms;
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    const dayText = Math.floor(timeRemaining / day);
    const hourText = Math.floor((timeRemaining % day) / hour);
    const minuteText = Math.floor((timeRemaining % hour) / minute);
    const secondText = Math.floor((timeRemaining % minute) / second);

    // Countdown text
    document.querySelector(".day").innerText = dayText;
    document.querySelector(".hour").innerText = hourText;
    document.querySelector(".minute").innerText = minuteText;
    document.querySelector(".second").innerText = secondText;
};

setInterval(countdown, 1000);
