let btn = document.querySelector(".ws-doc .toggle-menu .menubtn");
btn.addEventListener('click', function () {
    document.getElementById("mySidenav").classList.toggle('active');
    document.getElementById("content").classList.toggle('active');
    document.body.classList.toggle('active');
    document.querySelector(".ws-doc .toggle-menu").classList.toggle('active');
});