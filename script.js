const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mouse(){
    window.addEventListener("mousemove", function(dets){
       var crsr = document.querySelector("#m-circle");
       crsr.style.left = dets.x+"px";
       crsr.style.top = dets.y+"px";
    })
}
mouse();

