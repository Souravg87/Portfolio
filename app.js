const contactus = document.querySelector('.overlay');
const body = document.getElementsByTagName('body')[0];
var showThankyou = document.getElementById('thankyou');
var formBox = document.getElementById('form-box');



function
opencontact() {
    contactus.classList.add('open');
    body.classList.add('scrll');
    showThankyou.classList.remove('show');
    showThankyou.classList.add("hidden");
    formBox.classList.remove('hidden');
}

function hidecontact() {
    contactus.classList.remove('open');
    body.classList.remove('scrll');
    document.getElementById("myForm").reset();
    removeerror();

}

var checkFilledEmpty = false;

function check() {

    document.getElementById("myForm").querySelectorAll("[required]").forEach(
        (field) => {
            if (field.value.length === 0) {
                checkFilledEmpty = true;
            } else {
                checkFilledEmpty = false;
            }
        })

    if (checkFilledEmpty) {
        if ($(".error").length === 0) {
            afterText();
        }
    } else {
        if ($(".error").length !== 0) {
            removeerror();
        }
        SubForm();
        showThankyou.classList.add("show");
        formBox.classList.add('hidden');
    }
};

function afterText() {
    var error = '<div class="error" id="error">Please fill all the details</div>'; // Create element with HTML
    $(".contact-ins").has("error").length ? null : $(".contact-ins").after(error);
}

function removeerror() {
    var myobj = document.getElementById("error");
    myobj.remove();
}

function SubForm() {
    $.ajax({
        url: "https://api.apispreadsheets.com/data/13469/",
        type: "post",
        data: $("#myForm").serializeArray(),
        success: function() {
            alert("Form Data Submitted :)");
            document.getElementById("myForm").reset();
        },
        error: function() {
            alert("There was an error :(")
        }
    });
}