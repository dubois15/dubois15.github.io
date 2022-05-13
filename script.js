x=650;
y=365;
dx=5;
dy=5;

largeur=document.getElementById("terrain").style.width
hauteur=document.getElementById("terrain").style.height
rayon=document.getElementById("balle").style.height
console.log(largeur,hauteur,rayon)

function deplacement(){
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"
if (x + dx > largeur-rayon || x + dx < rayon) {
        dx = -dx;
    }
if(y + dy > hauteur-rayon || y + dy < rayon) {
        dy = -dy;
    }
x += dx;
y += dy;
}
setInterval(deplacement,20)

function deplacement_racket1(u){
	if (u>300)
		u=300
	if (u<0)
		u=0	
	document.getElementById("racket1").style.top=u+"px"	
}

function deplacement_racket2(u){
	if (u>300)
		u=300
	if (u<0)
		u=0	
	document.getElementById("racket2").style.top=u+"px"	
}


