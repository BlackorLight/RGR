function onClickHandler1() {
  const x1 = parseInt(document.getElementById('x1').value)
  const y1 = parseInt(document.getElementById('y1').value)
  const x2 = parseInt(document.getElementById('x2').value)
  const y2 = parseInt(document.getElementById('y2').value)
  if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2) || x1==x2 || y1==y2){
    alert("Ошибка ввода")
    return
  }
  const a = foo(x1, x2)
  const b = foo(y1, y2)
  const square = a * b
  const pirimetr = (a + b) * 2
  alert("Площадь равна " + square + "\nПериметр равен " + pirimetr)
}

function onClickInductor() {
  alert("win")
}