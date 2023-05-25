var a=document.getElementById('app');
var game=a.getContext("2d");
var width=window.screen.width/1.5;
var height=window.screen.height/1.5;
var cx=0;
a.width = width;
a.height = height;
game.fillStyle="#000000";
game.fillRect(0,0,width,height);
var jrhm=false;
var img=document.getElementById("jkyx");

function drawtxt(text,x,y,px="20px",color="white",font="Verdana"){
	game.font=px+' '+font;
	var gradient=game.createLinearGradient(0,0,a.width,0);
	gradient.addColorStop("0",color);
	game.fillStyle=gradient;
	game.fillText(text,x,y);
}
function update(){
	if(cx<=60*9){
		cx++;
	}
	if(cx==1){
		const myFont = new FontFace('ddjbt', 'url(./ddjbt.ttf)')
		myFont.load().then(font => {
  			document.fonts.add(font)
		}).then(() => {
			game.font="40px ddjbt";
			var gradient=game.createLinearGradient(0,0,a.width,0);
			gradient.addColorStop("0","white");
			game.fillStyle=gradient;
			game.fillText("ZP Game",width/2.7,height/1.9);
		})
		
	}
	if(cx==60*3){
		game.fillStyle="#000000";
		game.fillRect(0,0,width,height);
		game.font="20px ddjbt";
		var gradient=game.createLinearGradient(0,0,a.width,0);
		gradient.addColorStop("0","white");
		game.fillStyle=gradient;
		game.fillText("Made with Javascript",width/2.9,height/1.9);
	}
	if(cx==60*5){
		game.fillStyle="#000000";
		game.fillRect(0,0,width,height);
		game.drawImage(img,width/3.34640522875817,height/2.857142857142857);
	}
	if(cx==60*8){
		game.fillStyle="#808080";
		game.fillRect(0,0,width,height);
		drawtxt("生化危鸡",width/2.5,height/2.7,"40px","white","ddjbt");
		game.fillStyle="#87CEEB";
		game.fillRect(width/2.2816399286987523,height/1.7454545454545454,100,50);
		jrhm=true;
		game.font="25px ddjbt";
		var gradient=game.createLinearGradient(0,0,a.width,0);
		gradient.addColorStop("0","white");
		game.fillStyle=gradient;
		game.fillText("进入",width/2.1333333333333333,height/1.5841584158415842);
	}
}
function mscl(x,y){
	if(jrhm){
		if(x>=width/2.2816399286987523&&x<=width/2.2816399286987523+100){
			if(y>=height/1.7454545454545454&&y<=height/1.7454545454545454+50){
				game.fillStyle="#000000";
				game.fillRect(0,0,width,height);
				jrhm=false;
			}
		}
	}
}
setInterval(update, 17);
a.addEventListener('click', (e) => {
   console.log(e.clientX,e.clientY);
   mscl(e.clientX,e.clientY);

});