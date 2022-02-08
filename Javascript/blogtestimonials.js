

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const slider = document.getElementById('t-slider');

function pos(a) {
    if (a==1) {
        slider.style.transform = "translateX(-15px)";
        dot1.style.backgroundColor = "#555";
        dot2.style.backgroundColor = "#bec3c9";
        dot3.style.backgroundColor = "#bec3c9";
    } else if (a==2) {
        slider.style.transform = "translateX(-350px)";
        dot1.style.backgroundColor = "#bec3c9";
        dot2.style.backgroundColor = "#555";
        dot3.style.backgroundColor = "#bec3c9";
    } else if (a==3) {
        slider.style.transform = "translateX(-680px)";
        dot1.style.backgroundColor = "#bec3c9";
        dot2.style.backgroundColor = "#bec3c9";
        dot3.style.backgroundColor = "#555";
    }
}
function slide() {
    setTimeout(function(){
        slider.style.transform = "translateX(-15px)";
        dot1.style.backgroundColor = "#555";
        dot2.style.backgroundColor = "#bec3c9";
        dot3.style.backgroundColor = "#bec3c9";
        setTimeout(function(){
            slider.style.transform = "translateX(-350px)";
            dot1.style.backgroundColor = "#bec3c9";
            dot2.style.backgroundColor = "#555";
            dot3.style.backgroundColor = "#bec3c9";
            setTimeout(function(){
                slider.style.transform = "translateX(-680px)"; 
                dot1.style.backgroundColor = "#bec3c9";
                dot2.style.backgroundColor = "#bec3c9";
                dot3.style.backgroundColor = "#555";     
            },  10000)
        },  10000)
    }, 10000)
}
function slideStart(b){
    if (b=1){
        slide()
        setInterval(slide, 30000)
        b=2
    }
}
slideStart(1)