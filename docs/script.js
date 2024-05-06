const on = document.querySelector('#res');
const off = document.querySelector('#ser');

on.addEventListener("click", function() {
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display='flex'
});
off.addEventListener("click", function() {
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display='none'
});
