
function toggleFaqDropdown(a) {
    let dropDownElement =  document.getElementById('faqdrp' + a);
    dropDownElement.classList.toggle('faq-dropdown-toggle');
    dropDownElement.querySelector('span').textContent = "-";
    dropDownElement.querySelector('h4').style.color = "#7db537";
    if (dropDownElement.classList.contains('faq-dropdown-toggle') == false){
        dropDownElement.querySelector('span').textContent = "+";
        dropDownElement.querySelector('h4').style.color = "#000";
    }
}