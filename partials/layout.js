async function load(id, file) {
    const res = await fetch(file)
    document.getElementById(id).innerHTML = res.text()
}

load('header', '/partials/headers.html' )
load('footer', '/partials/footer.html' )