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

const inviteText = document.querySelectorAll('.invite__block-number span');
const inviteBtn = document.querySelectorAll('.invite__block-number-btn');

copyText(inviteText, inviteBtn);