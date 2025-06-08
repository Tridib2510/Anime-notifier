var _a;
var countdown_1 = document.getElementById('countdown2');
var c = countdown_1 === null || countdown_1 === void 0 ? void 0 : countdown_1.cloneNode(true);
(_a = countdown_1 === null || countdown_1 === void 0 ? void 0 : countdown_1.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(countdown_1);
fetch('https://anime-notifier-5.onrender.com')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var TIMER = [];
    for (var i = 0; i < data.List.length; i++) {
        var count = countdown_1 === null || countdown_1 === void 0 ? void 0 : countdown_1.cloneNode(true);
        var left = document.createElement('div');
        var right = document.createElement('div');
        left.classList.add('child');
        right.classList.add('right');
        left.style = 'background-color:#555; border-radius:8px';
        right.style = 'background-color:#555; border-radius:8px';
        var title = data.List[i].title;
        var date = data.List[i].date;
        var img = data.List[i].image;
        var anime = document.createElement('div');
        anime.id = 'anime';
        anime.classList.add('parent');
        var title_h1 = document.createElement('h1');
        var date_h2 = document.createElement('h2');
        var image = document.createElement('img');
        title_h1.innerHTML = title;
        title_h1.style = 'color:white;';
        date_h2.innerHTML = date;
        image.src = img;
        left === null || left === void 0 ? void 0 : left.appendChild(image);
        right === null || right === void 0 ? void 0 : right.appendChild(title_h1);
        right === null || right === void 0 ? void 0 : right.appendChild(date_h2);
        var Month_date = "".concat(date).substring(4, 7);
        var Month = "".concat(date).substring(8, 11);
        var year = "".concat(date).substring(12, 16);
        var timer = "".concat(date).substring(17, 25);
        var countDownDate = new Date("".concat(Month, " ").concat(Month_date, ", ").concat(year, " ").concat(timer)).getTime();
        // Update the count down every 1 second
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        console.log(distance);
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Output the result in an element with id="countdown" 
        var a = null;
        if (count)
            a = count.querySelector("#countdown");
        if (a)
            a.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds +
                "s ";
        // If the count down is over, write some text 
        console.log(count);
        if (right && count) {
            right === null || right === void 0 ? void 0 : right.appendChild(count);
        }
        anime === null || anime === void 0 ? void 0 : anime.appendChild(left);
        anime === null || anime === void 0 ? void 0 : anime.appendChild(right);
        if (days < 7) {
            document.body.appendChild(anime);
        }
    }
})
    .catch(function (err) { return console.log(err); });
