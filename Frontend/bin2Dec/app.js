
let btn = document.querySelector("button");

btn.addEventListener('click', () => {
    let input = document.querySelector("input");
    let p = document.querySelector("#para2");

    let decNum = bin2Dec(input.value);
    p.innerText = decNum;
});





function bin2Dec(binNum) {
    let str = binNum.toString();
    let decNum = 0;
    let len = str.length - 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0" && str[i] !== "1") {
            return "Input should be 0 or 1.";
        }

        decNum += (str[i] - "0") * Math.pow(2, len - i);
    }

    return decNum;
}