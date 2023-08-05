const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mouse(){
    window.addEventListener("mousemove", function(dets){
       var crsr = document.querySelector("#m-circle");
       crsr.style.left = dets.x-7+"px";
       crsr.style.top = dets.y-5+"px";
    })
}
mouse();

