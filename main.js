const customModal = document.querySelector("custom-message-dialog");
const customButton = document.querySelector("custom-button");
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");

//adding eventlistener for the Error Examples button for the click event
customButton.addEventListener('click', ()=>{
    document.querySelector("#overlay").classList.add('overlay');  //adding the overlay class dynamically once the button is clicked.
    customModal.open();   //calling the open() method of the custom-message-dialog class to open the modal
});

//adding eventlistener for the click event for the Restart Now button
closeBtn.addEventListener('click', ()=>{
    document.querySelector("#overlay").classList.remove('overlay');   //removing the overlay class once the button is clicked.
    customModal.close();    //calling the close() method of custom-message-dialog class the close the modal
});

//closing the modal on hitting the escape key from the keyboard
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.querySelector("#overlay").classList.remove('overlay');   
        customModal.close(); 
    }
  })