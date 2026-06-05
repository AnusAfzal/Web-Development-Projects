let btn = document.querySelector("button");
let outsideDiv = document.querySelector(".outside");
let insideDiv = document.querySelector(".inside");

btn.addEventListener('click', () => {
    let topLeftBorder = document.querySelector("#top-left");
    let bottomLeftBorder = document.querySelector("#bottom-left");
    let topRightBorder = document.querySelector("#top-right");
    let bottomRightBorder = document.querySelector("#bottom-right");

    let tl = topLeftBorder.value || 0;
    let tr = topRightBorder.value || 0;
    let bl = bottomLeftBorder.value || 0;
    let br = bottomRightBorder.value || 0;

    outsideDiv.style.borderTopLeftRadius = tl + "px";
    outsideDiv.style.borderTopRightRadius = tr + "px";
    outsideDiv.style.borderBottomLeftRadius = bl + "px";
    outsideDiv.style.borderBottomRightRadius = br + "px";


    let oldP = insideDiv.querySelector("p");
    if (oldP) oldP.remove();


    let infoP = document.createElement("p");
    infoP.innerText = `After 10 second border will reset.\nTop Left Border = ${tl}px.\nTop Right Border = ${tr}px.\nBottom Left Border = ${bl}px.\nBottom Right Border = ${br}px`;

    infoP.style.fontSize = '25px';
    infoP.style.color = 'black';
    infoP.style.color = '#333';
    infoP.style.textAlign = 'center';
    infoP.style.margin = '0';

    insideDiv.appendChild(infoP);

    topLeftBorder.value = '';
    topRightBorder.value = '';
    bottomLeftBorder.value = '';
    bottomRightBorder.value = '';

    setTimeout(() => {
        outsideDiv.style.borderTopLeftRadius = "0px";
        outsideDiv.style.borderTopRightRadius = "0px";
        outsideDiv.style.borderBottomLeftRadius = "0px";
        outsideDiv.style.borderBottomRightRadius = "0px";
        infoP.remove();
    }, 10000);
});