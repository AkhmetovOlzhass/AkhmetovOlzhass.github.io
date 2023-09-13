document.addEventListener('DOMContentLoaded', () => {
    var h = false;

    function listener(){
        if(vid.currentTime>=7){
            vid.pause();
            vid.removeEventListener("click", listener3, false);
            vid.removeEventListener("timeupdate", listener, false);

            yesBtn.addEventListener('click', ()=>{
                vid.play();
                title.innerHTML = 'Do you want to meet me and see more?';
                h = true;
            })
        }
    }

    function listener2(){
        if(h){
            yesBtn.setAttribute("href", "https://www.google.com");
            vid.removeEventListener("timeupdate", listener2, false);
        }
    }

    function listener3(){
        vid.play();
        vid.removeEventListener("click", listener3, false);
    }


    const vid = document.querySelector('video');
    const yesBtn = document.querySelector(".main__block-btn.white");
    const title = document.querySelector('.main__block-title');


    vid.addEventListener('timeupdate', listener);
    vid.addEventListener('timeupdate', listener2);


    vid.addEventListener('click', listener3);

    

})

