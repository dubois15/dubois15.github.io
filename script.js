x=0
y=0
dx=0
dy=0
largeur=document.getElementById("terrain").clientWidth
hauteur=document.getElementById("terrain").clientHeight
diametre=document.getElementById("balle").clientHeight
epaisseur=document.getElementById("racket1").clientWidth+document.getElementById("racket1").offsetLeft
w=(document.getElementById("terrain").clientHeight-document.getElementById("racket1").clientHeight)
//console.log(largeur,hauteur,diametre)

function deplacement(){
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"

if (x + dx > largeur-diametre || x + dx < 0) 
{dx = -dx;}

toucher=false
if(x+dx < epaisseur){
	if(document.getElementById("racket1").offsetTop < document.getElementById("balle").offsetTop+diametre && document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight> document.getElementById("balle").offsetTop){
toucher=true

if(document.getElementById("racket1").offsetTop < document.getElementById("balle").offsetTop+diametre && document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight-30"px"> document.getElementById("balle").offsetTop){
dy=-10*dy
}
}
if(x+dx> largeur-diametre-epaisseur){
	if(document.getElementById("racket2").offsetTop < document.getElementById("balle").offsetTop+diametre && document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight> document.getElementById("balle").offsetTop){
toucher=true
}
}

if(toucher==true){
dx = -dx;
}

if(y + dy > hauteur-diametre || y + dy < 0) 
{dy = -dy;}

x += dx;
y += dy;
}


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
x=largeur/2
y=hauteur/2
dx=-5
dy=Math.random()*(dx/5)-dx/10
setInterval(deplacement,5)
document.getElementById("score1").innerHTML=0
document.getElementById("score2").innerHTML=0
document.getElementById("victoire1").hidden=true;
document.getElementById("victoire2").hidden=true;
document.getElementById("reset").hidden=true;

}

init();

function victoire(j){
	document.getElementById("reset").hidden=false
	clearInterval(interval)
	if (j==1)
		document.getElementById("victoire1").hidden=false;
	if (j==2)
		document.getElementById("victoire2").hidden=false;


}
