var anime = document.getElementById('anime');
fetch('https://anime-notifier-5.onrender.com')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    for (var i = 0; i < data.List.length; i++) {
        var div = document.createElement('div');
        div.style = 'background-color:#555; border-radius:8px';
        var title = data.List[i].title;
        var date = data.List[i].date;
        var img = data.List[i].image;
        var title_h1 = document.createElement('h1');
        var date_h2 = document.createElement('h2');
        var image = document.createElement('img');
        title_h1.innerHTML = title;
        date_h2.innerHTML = date;
        image.src = img;
        div === null || div === void 0 ? void 0 : div.appendChild(image);
        div === null || div === void 0 ? void 0 : div.appendChild(title_h1);
        div === null || div === void 0 ? void 0 : div.appendChild(date_h2);
        anime === null || anime === void 0 ? void 0 : anime.appendChild(div);
    }
})
    .catch(function (err) { return console.log(err); });
