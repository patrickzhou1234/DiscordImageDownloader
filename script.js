async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = imageSrc.split("/")[6].split("?")[0];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var ls = document.querySelectorAll(".originalLink-Azwuo9");
var i = 0;
var downloadInt = setInterval(() => {
    downloadImage(ls[i].href);
    i++;
    if (i == ls.length) clearInterval(downloadInt);
}, 500);
