const backimg = [
    "drop-of-water-g2dbae8da8_640.jpg", 
    "drop-of-water-g230f1fd10_640.jpg", 
    "hd-wallpaper-g2de0cc27e_640.jpg"
];

const backrandomidx = Math.floor(Math.random() * backimg.length);
document.body.style.backgroundImage = `url(img/${backimg[backrandomidx]})`;
document.body.style.backgroundSize = "cover";