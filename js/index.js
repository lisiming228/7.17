var links=document.querySelectorAll(".head .head-inner");
var lists=document.querySelectorAll(".market-inner .bottom-item");
var topFixed=document.querySelector(".main-top-fixed");
var leftFixed=document.querySelector(".main-left-fixed");
var banner=document.querySelector(".banner");
var bannerImg=document.querySelectorAll(".banner-img-item");
var bannerSlider=document.querySelectorAll(".slider-nav-item");
var navDetail=document.querySelectorAll(".navitems");
var navBtn=document.querySelectorAll(".banner-nav ul li");
var navContainer=document.querySelector(".nav-detail");
var index=0;
var intervalBox = setInterval(move,3000);
var listCon=document.querySelectorAll(".list");
var listBtn=document.querySelectorAll(".main-left-fixed li:not(.top)");
var scrollTop=document.querySelector(".main-left-fixed li.top");
var img=document.querySelectorAll(".list");
for(let i=0;i<links.length;i++){
    links[i].onmouseover=function(){
        clearInterval(intervalBox);
        for(var j=0;j<lists.length;j++){
            links[j].className="head-inner";
            lists[j].style.display="none";
        }
        this.className="head-inner head-inner-selected"
        lists[i].style.display="block";
        index=i;
    }
    links[i].onmouseout=function(){
        intervalBox = setInterval(move,3000);
    }
    
}
for(let i=0;i<lists.length;i++){
    lists[i].onmouseover=function(){
        clearInterval(intervalBox);
        for(var j=0;j<lists.length;j++){
            links[j].className="head-inner";
            lists[j].style.display="none";
        }
        links[i].className="head-inner head-inner-selected"
        lists[i].style.display="block";
        index=i;
    }
    lists[i].onmouseout=function(){
        intervalBox = setInterval(move,3000);
    }
}
function move(){
    for(var j=0;j<lists.length;j++){
        links[j].className="head-inner";
        lists[j].style.display="none";
    }
    links[index].className="head-inner head-inner-selected";
    lists[index].style.display="block";
    if(index){
        index=0;
    }else{
        index=1;
    }
}
function scroll(){
    var st=document.documentElement.scrollTop;
    if(st>800){
        topFixed.style.top=0;
    }else{
        topFixed.style.top=-50+'px';
    }
    if(st>600){
        leftFixed.style.transform="scale(1,1)";
        leftFixed.style.opacity=1;
    }else{
        leftFixed.style.transform="scale(0,0)";
        leftFixed.style.opacity=0;
    }
}
scroll();
       
// function slider(){
//     for(var j=0;j<bannerImg.length;j++){
//         bannerImg[j].style.display="none";
//         bannerSlider[j].style.background="#000";
//         bannerSlider[j].style.opacity="0.3";
//     }
//     bannerImg[num].style.display="block";
//     bannerSlider[num].style.background="#fff";
//     bannerSlider[num].style.opacity="0.7";
//     switch(num){
//         case 0:banner.style.background="#E8E8E8";break;
//         case 1:banner.style.background="#479EE8";break;
//         case 2:banner.style.background="#FB994D";break;
//         case 3:banner.style.background="#E8E8E8";break;
//         case 4:banner.style.background="#E5E5E5";break;
//         case 5:banner.style.background="#D7133B";break;
//     }
//     if(num>=bannerImg.length-1){
//         num=0;
//     }else{
//         num++;
//     }
// }

// var t=setInterval(slider,3000);
var num=0;
function bg(index){
    switch(index){
        case 0:return "#E8E8E8";
        case 1:return "#479EE8";
        case 2:return "#FB994D";break;
        case 3:banner.style.background="#E8E8E8";break;
        case 4:banner.style.background="#E5E5E5";break;
        case 5:banner.style.background="#D7133B";break;
    }
}
function slider(){
    // num++;
    if(num>bannerSlider.length-1){
        num=0;
    }
    for(var i=0;i<bannerImg.length;i++){
        bannerImg[i].style.opacity=0;
        bannerImg[i].style.zIndex=0;
        bannerSlider[i].style.background="#000";
        bannerSlider[i].style.opacity="0.3";
    }
    bannerSlider[num].style.background="#fff";
    bannerSlider[num].style.opacity="0.7";
    
    animate(bannerImg[num],{
        "opacity":1
    },300,Tween.Linear,function(){
        bannerImg[num].style.zIndex=1;
    })
    
    switch(num){
        case 0:banner.style.background="#E8E8E8";break;
        case 1:banner.style.background="#479EE8";break;
        case 2:banner.style.background="#FB994D";break;
        case 3:banner.style.background="#E8E8E8";break;
        case 4:banner.style.background="#E5E5E5";break;
        case 5:banner.style.background="#D7133B";break;
    }
    if(num>=bannerImg.length-1){
        num=0;
    }else{
        num++;
    }
}
var t=setInterval(slider,3000)
for(let i=0;i<bannerImg.length;i++){
    bannerImg[i].onmouseover=function(){
        clearInterval(t);
    }
    bannerImg[i].onmouseout=function(){
        t=setInterval(slider,3000);
    }
}
for(let i=0;i<bannerSlider.length;i++){
    bannerSlider[i].onmouseover=function(){
        clearInterval(t);
        num=i;
        slider();
        
    }
    bannerSlider[i].onmouseout=function(){
        t=setInterval(slider,3000);
    }
}
function navColor(index){
    switch(index){
        case 0:
        case 3:
        case 4:
        case 7:
        case 8:
        case 11:
        case 12:
        case 15:
            navBtn[index].className="li-red";break;
        case 1:
        case 5:
        case 9:
        case 13:
            navBtn[index].className="li-blue";break;
        case 2:
        case 6:
        case 10:
        case 14:
            navBtn[index].className="li-purple";break;
    }
}
for(let i=0;i<navBtn.length;i++){
    navBtn[i].onmouseover=function(){    
        navContainer.style.display="block";
        for(let j=0;j<navDetail.length;j++){
            navDetail[j].style.display="none";
            navBtn[j].className="";
        }
        navColor(i);
        navDetail[i].style.display="block";
    }
    navBtn[i].onmouseout=function(){
        navContainer.style.display="none";
        navBtn[i].className="";
    }
}
for(let i=0;i<navDetail.length;i++){
    navDetail[i].onmouseover=function(){
        navContainer.style.display="block";
        navColor(i);
    }
    navDetail[i].onmouseout=function(){
        navContainer.style.display="none";
        navBtn[i].className="";
    }
}
// 定位
for(let i=0;i<listBtn.length;i++){
    listBtn[i].top=listCon[i].offsetTop-55;
    
    listBtn[i].onclick=function(){
        
        selectList(i);
        animate(document.documentElement,{
            scrollTop:this.top
        },500,Tween.Linear)
        console.log(listBtn[i].top)
    }
}
function selectList(index){
    for(let j=0;j<listBtn.length;j++){
        if(j!=0){
            listBtn[j].style.background="rgba(0,0,0,0.6)";
        }
    }
    switch(index){
        case 1:listBtn[index].style.background="#64C333";break;
        case 2:listBtn[index].style.background="#FF0036";break;
        case 3:listBtn[index].style.background="#EA5F8D";break;
        case 4:listBtn[index].style.background="#0AA6E8";break;
        case 5:listBtn[index].style.background="#64C333";break;
        case 6:listBtn[index].style.background="#F15453";break;
        case 7:listBtn[index].style.background="#19C8A9";break;
        case 8:listBtn[index].style.background="#FF0036";break;
        default:break;
    }
}
scrollTop.onclick=function(){
    animate(document.documentElement,{
        scrollTop:0
    },500,Tween.Linear)
}
function imgLoad(index){
    var imgList=img[index].querySelectorAll("img");
    for(let i=0;i<imgList.length;i++){
        var imgSrc=imgList[i].getAttribute("attr");
        console.log(imgSrc)
        imgList[i].setAttribute("src",imgSrc);
    }
}
var imgIndex=[0,0,0,0,0,0,0,0,0];
window.onscroll=function(){
    if(document.documentElement.scrollTop>=1379&&document.documentElement.scrollTop<2064){
        selectList(1);
    }else if(document.documentElement.scrollTop>=2064&&document.documentElement.scrollTop<2847){
        selectList(2);
    }else if(document.documentElement.scrollTop>=2847&&document.documentElement.scrollTop<3532){
        selectList(3);
    }else if(document.documentElement.scrollTop>=3532&&document.documentElement.scrollTop<4312){
        selectList(4);
    }else if(document.documentElement.scrollTop>=4312&&document.documentElement.scrollTop<4997){
        selectList(5);
    }else if(document.documentElement.scrollTop>=4997&&document.documentElement.scrollTop<5777){
        selectList(6);
    }else if(document.documentElement.scrollTop>=5777&&document.documentElement.scrollTop<6472){
        selectList(7);
    }else if(document.documentElement.scrollTop>=6472){
        selectList(8);
    }
    scroll();
    if(document.documentElement.scrollTop>0){
        if(imgIndex[0]==0){
            imgLoad(0);
        }
        imgIndex[0]=1;
    }
    if(document.documentElement.scrollTop>600){
        if(imgIndex[1]==0){
            imgLoad(1);
        }
        imgIndex[1]=1;
    }
    if(document.documentElement.scrollTop>1350){
        if(imgIndex[2]==0){
            imgLoad(2);
        }
        imgIndex[2]=1;
    }
    if(document.documentElement.scrollTop>2200){
        if(imgIndex[3]==0){
            imgLoad(3);
        }
        imgIndex[3]=1;
    }
    if(document.documentElement.scrollTop>2900){
        if(imgIndex[4]==0){
            imgLoad(4);
        }
        imgIndex[4]=1;
    }
    if(document.documentElement.scrollTop>3600){
        if(imgIndex[5]==0){
            imgLoad(5);
        }
        imgIndex[5]=1;
    }
    if(document.documentElement.scrollTop>4300){
        if(imgIndex[6]==0){
            imgLoad(6);
        }
        imgIndex[6]=1;
    }
    if(document.documentElement.scrollTop>5000){
        if(imgIndex[7]==0){
            imgLoad(7);
        }
        imgIndex[7]=1;
    }
    if(document.documentElement.scrollTop>5800){
        if(imgIndex[8]==0){
            imgLoad(8);
        }
        imgIndex[8]=1;
    }
}
