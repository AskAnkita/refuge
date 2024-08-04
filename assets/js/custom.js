var rating = 0;

function openModal() {

    rating = 0;
    const card = document.getElementById("card");
    const overlay = document.getElementById("overlay");
    const body = document.body;

    card.style.display = "flex";
    // overlay.style.display = "block";
    // body.classList.add("blur");
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
        data: {'rating':rating, 'email': email, 'feedback': feedback}, // Serialize the form data
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

function whatsappMessageModel() {
    var myModal = new bootstrap.Modal(document.getElementById('whatsappMessageModel'), {
        keyboard: false
    });
    myModal.show();
}

function sendMessage() {
    var message = document.getElementById('message-text').value;
    var phoneNumber = '917354954816'; // Replace with the phone number you want to send the message to
    var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
}