const images = [...document.querySelectorAll('#imgContainer img')];

const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.closePopupButton');
const imgIndex = document.querySelector('.ImgIndex');
const img= document.querySelector('.bigImage');
const imgName= document.querySelector('.topBar p');
const rightArrow= document.querySelector('.popupArrowRight');
const leftArrow= document.querySelector('.popupArrowLeft');

let index = 0;
let i = 0;

img.addEventListener('click',()=>{
    window.open(img.src,'_blank');
})

images.forEach(image =>{
    image.name = i;
    image.addEventListener('click',()=>{
        img.src = image.src;
        img.name = image.name;
        index = parseInt(image.name);
        imgName.innerHTML = image.src;
        console.log(index);
        popup.classList.toggle('active');
    })
    i++;
});

closeButton.addEventListener('click',()=>{
    popup.classList.toggle('active');
})

rightArrow.addEventListener('click',()=>{
    if((index + 1) > images.length - 1){
        index = 0;
        
        img.src = ""; 
        let parent = img.parentNode;
        parent.removeChild(img);
        img.src = images[index].src;
        parent.appendChild(img);


        console.log(index);
        return;
    }

    swapImgRight();
})


leftArrow.addEventListener('click',()=>{


    if((index - 1) < 0){
            index = images.length - 1;
            
            img.src = ""; 
            let parent = img.parentNode;
            parent.removeChild(img);
            img.src = images[index].src;
            parent.appendChild(img);
            
            
            console.log(index);
            return;
        }
        
    swapImgLeft();
})

function swapImgLeft(){
    try {

        img.src = ""; 
        let parent = img.parentNode;
        parent.removeChild(img);
        parent.appendChild(img);
        img.src = images[index--].src;


        imgName.innerHTML = images[index].src;
        console.log(index);
    } catch (error) {
        console.log('Image swap error:Left');
        console.log(error);
    }
}

function swapImgRight(){
    try {
        img.src = ""; 
        let parent = img.parentNode;
        parent.removeChild(img);
        parent.appendChild(img);
        img.src = images[index++].src;
        
        imgName.innerHTML = images[index].src; 
        console.log(index);
    } catch (error) {
        console.log("Image swap error:Right");
        console.log(error);
    }
}

