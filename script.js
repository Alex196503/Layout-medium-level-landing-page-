document.addEventListener(('DOMContentLoaded'),()=>{
    let btn = document.querySelector('.menu-icon');
    let container = document.querySelector('.mobile-menu');
    let body = document.querySelector('body'); 
    console.log(btn.alt);
    
    let images = [
        {ImageSrc : 'images/icon-hamburger.svg',
        ImageAlt : 'Image with hamburger menu'  
        },
        {ImageSrc : 'images/icon-close.svg',
        ImageAlt: 'Image which can close the mobile menu'}
    ]
    btn.addEventListener(('click'),()=>{
        container.classList.toggle('hidden');
        body.classList.toggle('scrollable');
        if(container.classList.contains('hidden')===false)
        {
            btn.src = images[1].ImageSrc;
            btn.alt = images[1].ImageAlt;
        }
        else{
            btn.src = images[0].ImageSrc;
            btn.alt = images[0].ImageAlt;
        }
    })
    window.addEventListener(('resize'),()=>{
        if(window.innerWidth>750)
        {
        container.classList.add('hidden');
        body.classList.remove('scrollable');
        }
        if(window.innerWidth<=750){
        btn.src = images[0].ImageSrc;
        btn.alt = images[0].ImageAlt;
        }
    })
})