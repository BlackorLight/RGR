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
    let Ik = prompt("Введите величину тока на коллекторе", 0)
    Ik = Number(Ik)
    let Ib = prompt("Введите величину тока базы", 0)
    Ib = Number(Ib)
    if (Ik == 0 || Ib == 0 || isNaN(Ik) || isNaN(Ib) ){
        alert("Некоректные данные")
        return
    }
    let B = +(Ik/Ib).toFixed(2)
    if(B < 1){
        alert("Коэффициент усиления очень мал, некоректные данные")
        return
    }
    alert("Коэффициент усиления при текущих параметрах цепи равен " + B)
}