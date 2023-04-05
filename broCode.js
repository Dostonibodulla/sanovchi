
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
