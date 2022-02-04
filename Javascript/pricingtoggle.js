
function pricingToggle(a){
    let op1 = document.getElementById('pricing-op1');
    let op2 = document.getElementById('pricing-op2');
    let ball = document.getElementById('pricing-ball');
    let cards = document.getElementById('pricing-cards');
    if (a==1 && op1.classList.contains('selected-option') == false){
        op1.classList.toggle('selected-option');
        op2.classList.toggle('selected-option');
        ball.style.transform = 'translateX(0)';
        cards.classList.toggle('pricing-anim-toggle');
        setTimeout(function(){
           cards.classList.toggle('pricing-anim-toggle');
        }, 500)
    } else if (a==2 && op1.classList.contains('selected-option') == true){
        op1.classList.toggle('selected-option');
        op2.classList.toggle('selected-option');
        ball.style.transform = 'translateX(175%)';
        cards.classList.toggle('pricing-anim-toggle');
        setTimeout(function(){
            cards.classList.toggle('pricing-anim-toggle');
        }, 500)
    }
}