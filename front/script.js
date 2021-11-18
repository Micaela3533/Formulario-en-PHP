var n1=document.querySelector('#nota1').value;
var n2=document.querySelector('#nota2').value;
var n3=document.querySelector('#nota3').value;
var div=document.querySelector('#resultado');
var url1 = 'http://localhost/TP6/resultado.php?nombre='+ n1;
fetch(url)
.then(res=> res.json())
.then(data=>{
    div.innerHTML=data
})