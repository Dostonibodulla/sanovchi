// 42:39 untill end this one tutorial
/* document.querySelector('#submit').onclick = function() {
    a = document.querySelector('#aInput').value;
    a = Number(a);
    b = document.querySelector("#bInput").value;
    b = Number(b);
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.querySelector("#cTomon").innerHTML = "Side C:" + c;
} */
document.getElementById("manfiy").onclick = function() {
    count -=1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("default").onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("musbat").onclick = function() {
    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}
