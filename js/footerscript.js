const img = document.getElementById('FooterTabImg');
const groupboxes = document.querySelectorAll('.footergroups');
const tabboxes = document.querySelectorAll('.FooterTab'); 
const peppinohit = document.querySelectorAll('.peppinohit');
let buttonstate = true;
let animpeppinohit = true;

img.addEventListener('click', () => {
    buttonstate = !buttonstate; 

    groupboxes.forEach((box) => {
        if (buttonstate) {
            box.classList.remove('transformed'); 
        } else {
            box.classList.add('transformed'); 
        }
    });

    tabboxes.forEach((box) => {
        if (buttonstate) {
            box.classList.remove('transformed');
        } else {
            box.classList.add('transformed');
        }
    });

    peppinohit.forEach((box) => {
        if (!buttonstate === animpeppinohit) {
            box.classList.add('transformed')
        }
    });

});