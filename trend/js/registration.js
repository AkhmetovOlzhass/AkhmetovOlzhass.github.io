function copyText(el, btn){
    btn.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            navigator.clipboard.writeText(el[i].innerText).then(function() {
                alert('Text copied to clipboard');
            }).catch(function(error) {
                console.error('Error:', error);
            });
        })
    })


}

const registrationText = document.querySelectorAll('.registration__data-block span');
const registrationBtn = document.querySelectorAll('.registration__data-block img');

copyText(registrationText, registrationBtn);