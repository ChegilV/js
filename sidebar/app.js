const clsBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');
const toggle = document.querySelector('.sidebar-toggle');

toggle.addEventListener('click', () => {
    // if(sideBar.classList.contains('show-sidebar')){
    //     sideBar.classList.remove('show-sidebar');
    // }else{
    //     sideBar.classList.add('show-sidebar');
    // }
    sideBar.classList.toggle('show-sidebar');
});

clsBtn.addEventListener('click', () =>{
    sideBar.classList.remove('show-sidebar');
})