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

let next, ls, i, myPromise;
next = document.querySelectorAll(".endButton-pLBGXH");
goThrough = () => {
    myPromise = new Promise(function (myResolve) {
        i = 0;
        next = document.querySelectorAll(".endButton-pLBGXH");
        ls = document.querySelectorAll(".originalLink-Azwuo9");
        var downloadInt = setInterval(() => {
            downloadImage(ls[i].href);
            i++;
            if (i == ls.length) {
                clearInterval(downloadInt);
                myResolve();
            }
        }, 500);
    });
    myPromise.then(function () {
        if (next[1].disabled) {
            clearInterval(nextInt);
        } else {
            next[1].click();
            setTimeout(() => {
                goThrough();
            }, 2000);
        }
    });
};
goThrough();
