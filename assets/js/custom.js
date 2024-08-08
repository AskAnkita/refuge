var rating = 0;


// Get the current URL path
const currentPath = window.location.pathname.split("/").pop();

// Get all the navigation links
const navLinks = document.querySelectorAll('.navmenu a');

// Loop through each link and add 'active' class to the matching link
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});


function openModal() {

    rating = 0;
    const card = document.getElementById("card");
    const overlay = document.getElementById("overlay");
    const body = document.body;

    card.style.display = "flex";
};

//close the box modal
function closeModal() {
    const close = document.getElementById("card");
    close.style.display = "none";
};


function selectRating(list) {
    $('.icon li').removeClass('active-feedback');
    $('.icon').find('i').removeClass('active-feedback');
    rating = $(list).data('value');
    $(list).addClass('active-feedback');
    $(list).find('i').addClass('icon-active');
    console.log(rating);

}

function submitFeedback() {

    var email = $('#feedback_email').val();
    var feedback = $('#feedback').val();
    $.ajax({
        url: "backend/feedback.php",
        type: "POST",
        data: { 'rating': rating, 'email': email, 'feedback': feedback }, // Serialize the form data
        success: function (response) {

            toastr.success('Thankyou for connecting with us.');

            $('#feedback_email').val('');
            $('#feedback').val('');
            closeModal();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error(textStatus, errorThrown);
            toastr.error('There was an error submitting the form.');
        }
    });
}

// Function to open the modal
function whatsappMessageModel() {
    var modal = document.getElementById('whatsappMessageModel');
    modal.style.display = 'block';
}


// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById('whatsappMessageModel');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


function sendMessage() {
    var message = document.getElementById('message-text').value;
    var phoneNumber = '447923175219'; // Replace with the phone number you want to send the message to
    var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}

function closeWtsModal() {
    $('.modal-backdrop').removeClass('show');
}

// Function to open the modal
function whatsappMessageModel() {
    var modal = document.getElementById('whatsappMessageModel');
    modal.style.display = 'block';
}

// Function to close the modal
function closeWtsModal() {
    var modal = document.getElementById('whatsappMessageModel');
    modal.style.display = 'none';
}


// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    var modal = document.getElementById('whatsappMessageModel');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}



function checkWhyBoxVisibility() {
    const whyBox = document.querySelector('.why-box.aos-init.aos-animate');
    const image = document.querySelector('.responsive-image');

    if (whyBox) {
        const rect = whyBox.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isVisible) {
            image.classList.add('custom-hide');
        } else {
            image.classList.remove('custom-hide');
        }
    }
}

// Check visibility on load and on resize/scroll events
window.addEventListener('load', checkWhyBoxVisibility);
window.addEventListener('resize', checkWhyBoxVisibility);
window.addEventListener('scroll', checkWhyBoxVisibility);

$('#whatsappMessageModel').on('shown.bs.modal', function (e) {
    $('body').removeClass('modal-open');
});

$('#whatsappMessageModel').on('hidden.bs.modal', function (e) {
    $('body').removeClass('modal-open');
});

// chat box

var ischatopen = false;
var ele = document.getElementById("chatbar");

function openChatBox() {
    if (ischatopen == false) {
        ele.classList.add("toggle");
        ischatopen = true;
        document.getElementById("chatOpen").classList.remove("fa-comments");
        document.getElementById("chatOpen").classList.add("fa-times");

    }
    else {
        ele.classList.remove("toggle");
        ischatopen = false;
        document.getElementById("chatOpen").classList.add("fa-comments");
        document.getElementById("chatOpen").classList.remove("fa-times");
    }
}