x=650;
y=365;
dx=5;
dy=5;

largeur=document.getElementById("terrain").clientWidth
hauteur=document.getElementById("terrain").clientHeight
diametre=document.getElementById("balle").clientHeight
//console.log(largeur,hauteur,diametre)

function deplacement(){
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"
if (x + dx > largeur-diametre || x + dx < 0
	) {
        dx = -dx;
    }
if(y + dy > hauteur-diametre || y + dy < 0
	) {
        dy = -dy;
}
//console.log(hauteur-diametre, dy)
x += dx;
y += dy;
}
setInterval(deplacement,5)

w=(document.getElementById("terrain").clientHeight-document.getElementById("racket1").clientHeight)

function deplacement_racket1(u){
	u += document.getElementById("racket1").offsetTop
	if (u>w)
		u=w
	if (u<0)
		u=0	
	document.getElementById("racket1").style.top=u+"px"	
}

function deplacement_racket2(u){
	u += document.getElementById("racket2").offsetTop
	if (u>w)
		u=w
	if (u<0)
		u=0	
	document.getElementById("racket2").style.top=u+"px"	
}

function touchePressee(e){
	if (e.key == "w")
		deplacement_racket1(-100)
	if (e.key == "s")
		deplacement_racket1(100)
	if (e.key == "ArrowUp")
		deplacement_racket2(-100)
	if (e.key == "ArrowDown")
		deplacement_racket2(100)
}
document.addEventListener('keydown',touchePressee);

function init(){
document.getElementById("racket1").style.top=(w)/2+"px"
document.getElementById("racket2").style.top=(w)/2+"px"
}

init();
