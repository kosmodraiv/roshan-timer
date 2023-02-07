var timermin = 0;
var timeravg = 0;
var timermax = 0;

function roshan(x){
    var x;
    do {
      x = Number(prompt('Введите минуту'));
    } while (!x);
    timermin = x + 5
    timeravg = x + 8
    timermax = x + 11
    var result = String("Min: " + timermin + ",") + " " + String("AVG: " + timeravg + ",") + " " +  String("Max: " + timermax);

    // Код для копирования результата в буфер обмена
    const el = document.createElement('textarea');
    el.value = result;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    return result;
};

function resultToDiv() {
    const result = roshan();
    document.getElementById("result").innerHTML = result;
};
