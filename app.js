Res;
Flagg;
function onClickRead(){
 document.getElementById('fls').click();
 document.getElementById('Calc').style.display = 'inline-block';
}

function onClickAuto(){
 flag = false;
 lines = document.getElementById('fls_t').value.split('\n');
 len = lines.length;
 for(let i = 0; i < len; i++){
 if(lines[i] == 1 && len-i>2){
 let U = lines[i+1];
 U = Number(U);
 let I = lines[i+2];
 i+=2;
 I = Number(I);
 if (U == 0 || I == 0 || isNaN(U) || isNaN(I) ){
 alert("Упс");
 return;
 }
 let X = (U * I);
 let P = +X.toFixed(2);
 if(P < X){P += (X-P)};
 let R = +(U/I).toFixed(2);
 if (R == 0){
 alert("Упс");
 return
 }
 if(flag==false){
 Res = ("Сопротивление резистора равно " + R + " Ом" +
"\nРассеиваемая мощность резистора должна превышать " + P + " Вт");
 flag = true;
 }
 else{
 Res += '\n';
 Res += ("Сопротивление резистора равно " + R + " Ом" +
"\nРассеиваемая мощность резистора должна превышать " + P + " Вт");
 }
 }
 else if(lines[i] == 2 && len-i>2){
 let Ik = lines[i+1];
 Ik = Number(Ik);
 let Ib = lines[i+2];
 Ib = Number(Ib);
 i+=2;
 if (Ik == 0 || Ib == 0 || isNaN(Ik) || isNaN(Ib) ){
 alert("Упс");
 return
 }
 let B = +(Ik/Ib).toFixed(2);
 if(B < 1){
 alert("Упс");
 return;
 }
 if(flag==false){
 Res = ("Коэффициент усиления при текущих параметрах цепи равен " + B);
 flag = true;
 }
 else{
 Res += '\n';
 Res += ("Коэффициент усиления при текущих параметрах цепи равен " + B);
 }
 }
 else if(flag == true){
 document.getElementById('OUT_B').style.background = 'lightgreen';
 document.getElementById('Print').style.display = 'inline-block';
 document.getElementById('OUT').value = Res;
 return;
 }
 else{
 document.getElementById('OUT_B').style.background = 'red';
 document.getElementById('OUT').value = "Некорректные данные";
 return;
 }
 }
 document.getElementById('OUT_B').style.background = 'lightgreen';
 document.getElementById('Print').style.display = 'inline-block';
 document.getElementById('OUT').value = Res;
 return;
}

function onClickPrint(){
 const blob = new Blob([Res], { type: "text/plain" });
 const url = URL.createObjectURL(blob);
 const link = document.createElement("a");
 link.download = "Output.txt";
 link.href = url;
 link.click();
}

function onClickResistor() {
 Flagg = 1;
 document.getElementById('OUT_B').style.background = '#008080';
 document.getElementById('OUT').textContent = " ";
 document.getElementById('but').style.display = 'inline-block';
 document.getElementById('first').style.display = 'inline-block';
 document.getElementById('second').style.display = 'inline-block';
 document.getElementById('in_first').textContent = "Введите падение напряжения на резисторе";
 document.getElementById('in_second').textContent = "Введите силу тока";

}

function Resistor(){
 let U = document.getElementById('first_in').value;
 U = Number(U);
 let I = document.getElementById('second_in').value;
 I = Number(I);
 if (U == 0 || I == 0 || isNaN(U) || isNaN(I) ){
 document.getElementById('OUT_B').style.background = 'red';
 document.getElementById('OUT').value = "Некорректные данные";
 return;
 }
 let X = (U * I);
 let P = +X.toFixed(2);
 if(P < X){P += (X-P)};
 let R = +(U/I).toFixed(2);
 if (R == 0){
 document.getElementById('OUT_B').style.background = 'red';
 document.getElementById('OUT').value = "Сопротивление резистора очень мало, некорректные данные";
 return
 }
 document.getElementById('OUT_B').style.background = 'lightgreen';
 Res = ("Сопротивление резистора равно " + R + " Ом" + "\nРассеиваемая мощность резистора должна превышать " + P + " Вт");
 document.getElementById('Print').style.display = 'inline-block';
 document.getElementById('OUT').value = Res;
 document.getElementById('in_first').textContent = " ";
 document.getElementById('in_second').textContent = " ";
 document.getElementById('first').style.display = 'none';
 document.getElementById('second').style.display = 'none';
 document.getElementById('but').style.display = 'none';
}

function readFile(input) {
 let file = input.files[0];
 let reader = new FileReader();
 reader.readAsText(file);
 reader.onload = function() {
 document.getElementById('fls_t').value = reader.result;
 };
 reader.onerror = function() {
 console.log(reader.error);
 };

}

function onClickInductor() {
 alert("Пока не реализованно");
}

function onClickSvetodiod() {
 Flagg = 3;
 document.getElementById('OUT_B').style.background = '#008080';
 document.getElementById('OUT').textContent = " ";
 document.getElementById('but').style.display = 'inline-block';
 document.getElementById('first').style.display = 'inline-block';
 document.getElementById('in_first').textContent = "Введите напряжение питания";
}

function Svetodiod(){
 let U = document.getElementById('first_in').value;
 U = Number(U);
 if (U == 0 || isNaN(U)){
 document.getElementById('OUT_B').style.background = 'red';
 document.getElementById('OUT').value = "Некорректные данные";
 return;
 }
 document.getElementById('OUT_B').style.background = 'lightgreen';
 Res = ("Необходимо установить резистор с сопротивлением не менее " + ((U)/0.02).toFixed(2) + " Ом");
 document.getElementById('Print').style.display = 'inline-block';
 document.getElementById('OUT').value = Res;
 document.getElementById('in_first').textContent = " ";
 document.getElementById('first').style.display = 'none';
 document.getElementById('but').style.display = 'none';
}

function chose(){
 if(Flagg == 1){
 Resistor();
 }
 else if(Flagg == 2){
 Transistor();
 }
 else if(Flagg == 3){
 Svetodiod();
 }
}

function Transistor(){
 let Ik = document.getElementById('first_in').value;
 Ik = Number(Ik);
 let Ib = document.getElementById('second_in').value;
 Ib = Number(Ib);
 if (Ik == 0 || Ib == 0 || isNaN(Ik) || isNaN(Ib) ){
 document.getElementById('OUT_B').style.background = 'red';
 document.getElementById('OUT').value = "Некорректные данные";
 document.getElementById('in_first').value = "Введите величину тока на коллекторе";
 return
 }
 let B = +(Ik/Ib).toFixed(2);
 if(B < 1){
 document.getElementById('OUT_B').style.background = 'red';
 document.getElementById('OUT').value = ("Коэффициент усиления очень мал, некорректные данные");
 return;
 }
 document.getElementById('OUT_B').style.background = 'lightgreen';
 Res = ("Коэффициент усиления при текущих параметрах цепи равен " + B);
 document.getElementById('Print').style.display = 'inline-block';
 document.getElementById('OUT').value = Res;
 document.getElementById('in_first').textContent = " ";
 document.getElementById('in_second').textContent = " ";
 document.getElementById('first').style.display = 'none';
 document.getElementById('second').style.display = 'none';
 document.getElementById('but').style.display = 'none';
}

function onClickTransistor() {
 Flagg = 2;
 document.getElementById('OUT_B').style.background = '#008080';
 document.getElementById('OUT').textContent = " ";
 document.getElementById('but').style.display = 'inline-block';
 document.getElementById('first').style.display = 'inline-block';
 document.getElementById('second').style.display = 'inline-block';
 document.getElementById('in_first').textContent = "Введите величину тока на коллекторе";
 document.getElementById('in_second').textContent = "Введите величину тока базы";

}