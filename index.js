// Get all menu items
const menuItems = document.querySelectorAll('.sidebar a');

// Add event listener to each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => {
    // Remove active class from all menu items
    menuItems.forEach((item) => item.classList.remove('active'));

    // Add active class to the clicked menu item
    e.target.closest('a').classList.add('active');
  });
});


const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
//show side bar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
})
//close side bar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})


//change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

