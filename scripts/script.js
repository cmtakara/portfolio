// mode toggle
const toggleMode = document.getElementById('mode');
const body = document.body;

toggleMode.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.classList.toggle('dark-mode');
    let childNodes = body.children;
    // console.log(childNodes);
    for (let child of childNodes ) {
        // console.log(child.tagName);
        if (child.tagName !== 'SCRIPT') child.classList.toggle('dark-mode');
    }

    // toggleMode.classList.toggle('dark-mode');
    // console.log(body.classList)
    toggleMode.innerHTML = body.classList.contains('dark-mode') ? '<i class="fa-solid fa-circle-half-stroke"></i> Light Mode ' : '<i class="fa-solid fa-circle-half-stroke"></i> Dark Mode ';
})

function toggleMenu () {
    let navEl = document.getElementById("nav");
    navEl.classList.toggle('responsive');
}

function cancelEmail() {
    let formData = document.getElementById('contact-form');
    formData.reset();
    let contactEl = document.getElementById('contact');
    contactEl.classList.add('hide');
}

function showContact() {
    let contactEl = document.getElementById('contact');
    contactEl.classList.remove('hide');
}

(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
        publicKey: "KZf90ecqBPS-S28XJ",
    });
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('profile_service', 'template_vggc9ya', this)
            .then(() => {
                // console.log('SUCCESS!');
                alert('email sent successfully');
                cancelEmail();
            }, (error) => {
                // console.log('FAILED...', error);
                alert('Sorry, the message failed to send.')
                cancelEmail();
            });
    });
}