const toggleBtn = document.querySelector('.toggle-btn');

const links = document.querySelector('.navCenter')

toggleBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(links.classList.contains("showNavCenter")){
        links.classList.remove("showNavCenter")
    }
    else {
        links.classList.add("showNavCenter")
    }

});