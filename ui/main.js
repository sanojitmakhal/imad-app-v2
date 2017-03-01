console.log('Loaded!');
var element=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginleft+1;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};
