let paragraph = document.querySelector('.text');
let text = 'Web Desing With React'.repeat(300);
paragraph.textContent = text;
paragraph.innerHTML = paragraph.textContent.replace(/\S/g,"<span>$&</span>");



let menuBtn = document.querySelector('.toggleBtn')
let sidebar = document.querySelector('.sidebar')
let cancelBtn = document.querySelector('.cancelBtn')



// const closeSidebar = (event) => {
//     if(
//         event.target.classList.contains("sidebar") ||
//         event.target.classList.contains("cancelBtn")
//     ) {
//         sidebar.classList.remove("active");
//     }
    
// }

menuBtn.addEventListener('click', ()=>{
    sidebar.classList.add("active")
})

const closeSidebar = () => {
    sidebar.classList.remove("active")
}

cancelBtn.addEventListener("click", closeSidebar)
// sidebar.addEventListener("click", closeSidebar)