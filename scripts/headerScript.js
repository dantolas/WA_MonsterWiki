let homeNav = document.querySelector("#homeNav");
let monstersNav = document.querySelector("#monstersNav");
let aboutNav = document.querySelector("#aboutNav");

if(sessionStorage.getItem("page") == null){
    sessionStorage.setItem("page","homeNav");
}

switchUnderlinedNav();



let links = document.querySelectorAll(".navItem");

links.forEach(link =>{
    link.addEventListener('click',()=>{
        sessionStorage.setItem("page",link.id);
    })
})



function switchUnderlinedNav(){
    switch(sessionStorage.getItem("page")){
        
        case "homeNav":
            homeNav.classList.toggle("active");
            break;

        case "monstersNav":
            monstersNav.classList.toggle("active");
            break;
        
        case "aboutNav":
            aboutNav.classList.toggle("active");
            break;


        default:

            links.forEach(link =>{
                link.classList.remove("active");
            })

            homeNav.classList.toggle('active');
            break;
    }
}