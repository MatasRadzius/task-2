/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
let button = document.getElementById("btn__state"), count = 0;
function clickButton() {
    count += 1;
    button.innerHTML = count;
};
document.getElementById("btn__element").addEventListener("click", clickButton)