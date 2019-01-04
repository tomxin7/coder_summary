

var canvas=document.getElementById('myCanvas');
//大小
canvas.height=550;
canvas.width=350;
var ctx=canvas.getContext('2d');
//图片
var img = new Image();
//1.jpg 在当前目录下
img.src = "1.jpg"
function gen(){
    //绘制图片
    ctx.drawImage(img, 0, 0);
    //设置字体颜色
    ctx.font = "20pt Calibri";
    ctx.fillStyle = "#FFFFFF";
    //设置第一处内容
    ctx.fillText(document.getElementById("first").value,20,265);
    //设置第二处内容
    ctx.fillText(document.getElementById("second").value,20,530);
}
//第一处展示
img.onload= function(){
    gen();
}