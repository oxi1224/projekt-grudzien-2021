
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const slider = document.getElementById('review-slider');

function pos(a) {
    if (a==1) {
        slider.style.transform = "translateX(15px)";
        dot1.style.backgroundColor = "#6a992c";
        dot2.style.backgroundColor = "rgba(255,255,255,0.5)";
        dot3.style.backgroundColor = "rgba(255,255,255,0.5)";
    } else if (a==2) {
        slider.style.transform = "translateX(-1175px)";
        dot1.style.backgroundColor = "rgba(255,255,255,0.5)";
        dot2.style.backgroundColor = "#6a992c";
        dot3.style.backgroundColor = "rgba(255,255,255,0.5)";
    } else if (a==3) {
        slider.style.transform = "translateX(-2360px)";
        dot1.style.backgroundColor = "rgba(255,255,255,0.5)";
        dot2.style.backgroundColor = "rgba(255,255,255,0.5)";
        dot3.style.backgroundColor = "#6a992c";
    }
}

function slide() {
    setTimeout(function(){
        slider.style.transform = "translateX(0px)";
        dot1.style.backgroundColor = "#6a992c";
        dot2.style.backgroundColor = "rgba(255,255,255,0.5)";
        dot3.style.backgroundColor = "rgba(255,255,255,0.5)";
        setTimeout(function(){
            slider.style.transform = "translateX(-587.5px)";
            setTimeout(function(){
                slider.style.transform = "translateX(-1180px)";
                setTimeout(function(){
                    slider.style.transform = "translateX(-1762.6px)";
                    dot1.style.backgroundColor = "rgba(255,255,255,0.5)";
                    dot2.style.backgroundColor = "#6a992c";
                    dot3.style.backgroundColor = "rgba(255,255,255,0.5)";
                    setTimeout(function(){
                        slider.style.transform = "translateX(-2360px)";
                        dot1.style.backgroundColor = "rgba(255,255,255,0.5)";
                        dot2.style.backgroundColor = "rgba(255,255,255,0.5)";
                        dot3.style.backgroundColor = "#6a992c";
                    },  10000)
                },  10000)
            },  10000)
        },  10000)
    }, 10000)
}
function slideStart(b){
    if (b=1){
        slide()
        setInterval(slide, 50000)
        b=2
    }
}
slideStart(1)