const img = document.getElementById('FooterTabImg');
const groupboxes = document.querySelectorAll('.footergroups');
const tabboxes = document.querySelectorAll('.FooterTab'); 
let buttonstate = true;

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
});