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
goThrough = () => {
  myPromise = new Promise(function (myResolve) {
    i = 0;
    ls = [];
      next=[];
      document.querySelectorAll("div").forEach((el) => {
  if (el.className.includes("endButton")) {
    next.push(el);
  }
});
    document.querySelectorAll("a").forEach((el) => {
      if (el.className.includes("originalLink")) {
        ls.push(el);
      }
    });
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
      }, 9000);
    }
  });
};
goThrough();
