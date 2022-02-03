
let locationMainBox = document.getElementById('locationMainBox');
let locationContents = document.getElementById('locationDropdownContent');

function toggleLocationDropdown() {
    let locationContentsvis = locationContents.style.visibility;
    
    if (locationContentsvis == 'hidden') {
        locationContents.style.visibility = 'visible';
        locationMainBox.style.borderRadius = '2.5px 2.5px 0 0';
        locationMainBox.querySelector('span').style.transform = "rotate(-90deg)";
    } else {
        locationContents.style.visibility = 'hidden';
        locationMainBox.querySelector('span').style.transform = "rotate(90deg)";
    }
}

function optionSelect(a){
    if (a==1) {
        let op1 = document.getElementById('locationOp1').textContent;
        locationMainBox.querySelector('p').textContent = op1;
        locationContents.style.visibility = 'hidden';
    } else if (a==2) {
        let op2 = document.getElementById('locationOp2').textContent;
        locationMainBox.querySelector('p').textContent = op2;
        locationContents.style.visibility = 'hidden';
    } else if (a==3) {
        let op3 = document.getElementById('locationOp3').textContent;
        locationMainBox.querySelector('p').textContent = op3;
        locationContents.style.visibility = 'hidden';
    }
    
}
