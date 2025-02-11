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
    toggleMode.textContent = body.classList.contains('dark-mode') ? ' Switch to Light Mode ' : ' Switch to Dark Mode ';
})