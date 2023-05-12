const openIcon=document.getElementById('open-icon');
const closeIcon=document.getElementById('close-icon');
const menuItems=document.getElementById('menu-items');
openIcon.addEventListener('click',()=>{
    console.log('connected')
    openIcon.style.display="none";
    closeIcon.style.display="block";
    menuItems.style.display="flex";

})

closeIcon.addEventListener('click',()=>{
    closeIcon.style.display="none";
    menuItems.style.display="none";
    openIcon.style.display="block";
})