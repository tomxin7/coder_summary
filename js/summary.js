
var canvas=document.getElementById('myCanvas');
//大小
canvas.height=700;
canvas.width=400;
var ctx=canvas.getContext('2d');
//图片
var img = new Image();
//随机生成图片
var num = randomNum(1,3);
var img_url = "http://qiniu.tomxin.cn/summary" + num +  ".png"
img.src = img_url
document.title = decodeURI(getParam("name")) + "的年度报告";

gen()
function gen(){

    //绘制图片
    ctx.drawImage(img, 0, 0);
    //设置字体颜色
    ctx.font = "15pt 宋体";
    ctx.fillStyle = "#FFFFFF";
    //设置第一处内容
    ctx.fillText(decodeURI(getParam("name")),180,72);
    //设置第二处内容
    // ctx.fillText(document.getElementById("second").value,20,530);
}
//第一处展示
img.onload= function(){
    gen();
}


//获取name
function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}


//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
            break;
    }
}