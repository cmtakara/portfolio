// mode toggle
const toggleMode = document.getElementById('mode');
const body = document.body;

toggleMode.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.classList.toggle('dark-mode');
    let childNodes = body.children;
    console.log(childNodes);
    for (let child of childNodes ) {
        console.log(child.tagName);
        if (child.tagName !== 'SCRIPT') child.classList.toggle('dark-mode');
    }

    // toggleMode.classList.toggle('dark-mode');
    console.log(body.classList)
    toggleMode.innerHTML = body.classList.contains('dark-mode') ? '<i class="fa-solid fa-circle-half-stroke"></i> Light Mode ' : '<i class="fa-solid fa-circle-half-stroke"></i> Dark Mode ';
})

function toggleMenu () {
    let navEl = document.getElementById("nav");
    navEl.classList.toggle('responsive');
}