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

function touchePressee(e){
	console.log(e)
document.getElementById()
}
document.addEventListener('keydown',touchePressee);



