const img = document.getElementById('FooterTabImg');
const groupboxes = document.querySelectorAll('.footergroups');
const tabboxes = document.querySelectorAll('.FooterTab'); 
const peppinohit = document.querySelectorAll('.peppinohit'); 
const peppinohitimg = document.getElementById('peppinohitimg');
let buttonstate = true;
let peppinohitanim = true;

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

    peppinohit.forEach(() => {
        if (!buttonstate === peppinohitanim ) {
            peppinohitimg.src = 'img/PeppinoHit.gif';
            peppinohitanim  = "NULL";
        }
    });

});