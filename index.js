console.log('hola mundo');


let img = document.getElementById('magic-image')


img.addEventListener('click',()=>{
    if(img.classList.contains('active')){
        img.classList.remove('active');
    }else{
        img.classList.add('active');
    }
})


