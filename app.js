function onClickResistor() {
    let U = prompt("Введите падение напряжения на резисторе", 0)
    U = Number(U)
    let I = prompt("Введите силу тока", 0)
    I = Number(I)
    if (U == 0 || I == 0 || isNaN(U) || isNaN(I) ){
        alert("Некоректные данные")
        return
    }
    let X = (U * I)
    let P = +X.toFixed(2)
    if(P < X){P += (X-P)}
    let R = +(U/I).toFixed(2)
    if (R == 0){
        alert("Сопротивление резистора очень мало, некоректные данные")
        return
    }
    alert("Сопротивление резистора равно " + R + " Ом" + "\nРассеиваемая мощность резистора должна превышать " + P + " Вт")
}

function onClickCapacitor() {
  alert("Пока не реализованно")
}

function onClickInductor() {
  alert("Пока не реализованно")
}

function onClickTransistor() {
  alert("Пока не реализованно")
}