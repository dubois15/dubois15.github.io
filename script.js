x=0
y=0
dx=0
dy=0
score1=0
score2=0
level=50
levell=50
echange=0
intervalRobot1=null
intervalRobot2=null
largeur=document.getElementById("terrain").clientWidth
hauteur=document.getElementById("terrain").clientHeight
diametre=document.getElementById("balle").clientHeight
epaisseur=document.getElementById("racket1").clientWidth+document.getElementById("racket1").offsetLeft
w=(document.getElementById("terrain").clientHeight-document.getElementById("racket1").clientHeight)
//console.log(largeur,hauteur,diametre)

function deplacement(){
	if(dx==0){
		return
	}
document.getElementById("balle").style.left=x+"px"
document.getElementById("balle").style.top=y+"px"
    if (x + dx < 0 ){
        dx = Math.abs(dx);
        score2++;
        dy=0
        dx=0
        document.getElementById("score2").innerHTML=score2
        setTimeout(balleaucentre,1000)
        if (score2>3){
        	victoire(2)
        }
    }
    if(x+dx>largeur-diametre){
    	dx=-Math.abs(dx);
        score1++;
        dy=0
        dx=0
        document.getElementById("score1").innerHTML=score1
        setTimeout(balleaucentre,1000)
        if (score1>3){
        	victoire(1)
        }
    }
if(x +dx < epaisseur){
	if(document.getElementById("balle").offsetTop>document.getElementById("racket1").offsetTop-diametre
		&&
		document.getElementById("balle").offsetTop<document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight){
	dx=-dx*1.05;
echange++;
document.getElementById("echange").innerHTML=echange
 animation("racket1")
 couleur1("couleur1")
if(document.getElementById("balle").offsetTop
<document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight*25/100){
	dy=dy-0.5
}
    if(document.getElementById("balle").offsetTop
>document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight*75/100){
	dy=dy+0.5
    }
}
}
if (x + dx > largeur-diametre-epaisseur ) {
    if(document.getElementById("balle").offsetTop>document.getElementById("racket2").offsetTop-diametre
		&&
		document.getElementById("balle").offsetTop<document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight){
	dx=-dx*1.05;
echange++;
document.getElementById("echange").innerHTML=echange
couleur2("couleur2")
animation("racket2")
if (document.getElementById("balle").offsetTop<document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight*25/100){
dy=dy-0.5
	}
	if(document.getElementById("balle").offsetTop
>document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight*75/100){
	dy=dy+0.5
    }
 }  
}
 


if (y + dy > hauteur-diametre || y + dy<0){
	dy =-dy;
}
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
document.getElementById("reset").addEventListener("click",init);

function init(){
document.getElementById("racket1").style.top=(w)/2+"px"
document.getElementById("racket2").style.top=(w)/2+"px"
x=largeur/2
y=hauteur/2
dx=-5
dy=Math.random()*(dx/5)-dx/10
interval=setInterval(deplacement,5)
document.getElementById("score1").innerHTML=0
document.getElementById("score2").innerHTML=0
document.getElementById("victoire1").style.visibility="hidden";
document.getElementById("victoire2").style.visibility="hidden";
document.getElementById("reset").style.visibility="hidden";
document.getElementById("start").style.visibility="hidden"
if(document.getElementById('auto1').checked){
intervalRobot1=setInterval(robot1,level)}
if(document.getElementById('auto2').checked){
intervalRobot2=setInterval(robot2,levell)
document.getElementById("echange").innerHTML=0
}


}



function robot1(){
	if (dx>0){
		return
	}
	if(document.getElementById("balle").offsetTop<document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight/2){
		deplacement_racket1(-25)
	}
	if(document.getElementById("balle").offsetTop>document.getElementById("racket1").offsetTop+document.getElementById("racket1").clientHeight/2){

	deplacement_racket1(25)
}
}

function robot2(){
	if(dx<0){
		return
	}
	if(document.getElementById("balle").offsetTop<document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight/2){
		deplacement_racket2(-25)
	}
	if(document.getElementById("balle").offsetTop>document.getElementById("racket2").offsetTop+document.getElementById("racket2").clientHeight/2){

	deplacement_racket2(25)
}
}


function victoire(j){
	document.getElementById("reset").style.visibility="visibility";
	clearInterval(interval)
	if (j==1)
		document.getElementById("victoire1").style.visibility="visibility";
	if (j==2)
		document.getElementById("victoire2").style.visibility="visibility";
score1=0
score2=0
if(intervalRobot1){
clearInterval(intervalRobot1)
}
if(intervalRobot2){
clearInterval(intervalRobot2)
}

}

function balleaucentre() {
	echange=0
        document.getElementById("echange").innerHTML=echange
        if (document.getElementById("balle").offsetLeft>x){
		dx=-5
	}
	if (document.getElementById("balle").offsetLeft<x){
		dx=5
	}
	dy=Math.random()-1.
	console.log(dx)
	y=(hauteur-document.getElementById("balle").clientHeight)/2
	x=(largeur-document.getElementById("balle").clientWidth)/2
	
	}


function animation(animation){
	document.getElementById("balle").classList.add(animation)
	setTimeout(animation2,1000)
}

function animation2(){
document.getElementById("balle").classList.remove("racket1")
	document.getElementById("balle").classList.remove("racket2")
}

function couleur1(animation){
	document.getElementById("racket1").classList.add(animation)
	setTimeout(couleur,1000)
}

function couleur2(animation){
	document.getElementById("racket2").classList.add(animation)
	setTimeout(couleur,1000)
}

function couleur(){
document.getElementById("racket1").classList.remove("couleur1")
document.getElementById("racket2").classList.remove("couleur2")
}



document.getElementById("start").addEventListener("click",init);


function level1(){
	level=30+parseInt(document.getElementById("level1").value)
	console.log(level)
}

document.getElementById("level1").addEventListener("click",level1)

function level2(){
	levell=30+parseInt(document.getElementById("level2").value)
	console.log(levell)
}

document.getElementById("level2").addEventListener("click",level2)

