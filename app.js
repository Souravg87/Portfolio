const contactus = document.querySelector('.overlay');
const body = document.getElementsByTagName('body')[0];


function opencontact() {

    contactus.classList.add('open');
    body.classList.add('scrll');
}

function hidecontact() {
    contactus.classList.remove('open');
    body.classList.remove('scrll');
    document.getElementById("myForm").reset();
    removeerror();

}