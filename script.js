document.addEventListener('DOMContentLoaded', function(){
    // wait until the code has loaded
    const form =document.querySelector('.contact-form'); 
        form.addEventListener('submit',function (event) {event.preventDefault(); //stop page from refreshing
            alert('Thanks for your message, Aidan will get back to you!');
            form.reset(); //clear the form
        })
    

    const toggleButton=document.getElementById('toggle-button');
    const secretMessage=document.getElementById('secret-message');

    toggleButton.addEventListener('click', function(event){
        if (secretMessage.style.display==='none') {secretMessage.style.display='block'; toggleButton.textContent='Hide Secret';
        } else {secretMessage.style.display='none'; toggleButton.textContent='Reveal Secret';                 
        }
    })

    //live character counter
    const messageInput=document.getElementById('message');
    const charCount=document.getElementById('char-count');
            
    messageInput.addEventListener('input', function() {
        charCount.textContent = messageInput.value.length;
    })

    //live name preview
    const nameInput=document.getElementById('name')
    const namePreview=document.getElementById('live-name')

    nameInput.addEventListener('input', function() {
        namePreview.textContent = nameInput.value || 'stranger';
    })

    //background color change
    const colorPicker=document.getElementById('color-picker')
            
    colorPicker.addEventListener('change', function() {
        if (colorPicker.value) {document.body.style.backgroundColor=colorPicker.value}
    })
})
