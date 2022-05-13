x=650;
y=365;
dx=5;
dy=5;
function deplacement(x,y){
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"
x += dx;
y += dy;
console.log(x,y)
}
setInterval(deplacement,20)
