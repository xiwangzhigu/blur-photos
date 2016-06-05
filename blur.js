var canvasWidth=1600
var canvasHeight=900

var canvas=document.getElementById("canvas")
var context=canvas.getContext("2d")

canvas.width=canvasWidth
canvas.height=canvasHeight


var image=new Image()
var radius=100
image.src="image.jpg"
var clippingRegion={x:0,y:0,r:radius}
image.onload=function(e){
    initCanvas()
}

function initCanvas(){
    clippingRegion={x:Math.random()*(canvas.width-2*radius)+radius,y:Math.random()*(canvas.height-2*radius)+radius,r:radius}
    draw(image,clippingRegion)
}

function setclippingregion(clippingregion){
    context.beginPath()
    context.arc(clippingregion.x , clippingregion.y , clippingregion.r , 0 , Math.PI*2 ,false)
    context.clip()
}
function draw(image ,clippingRegion){
    context.clearRect(0,0,canvas.width,canvas.height)
    context.save()
    setclippingregion(clippingRegion)
    context.drawImage(image,0,0)
    context.restore()
}


function show(){
    var animation=setInterval(function(){
        console.log("animation")
        clippingRegion.r+=20
        if(clippingRegion.r>2*Math.max(canvas.width,canvas.height)){
            clearInterval(animation)
        }
        draw(image,clippingRegion)
    },30)
}

function reset(){
    initCanvas()
}