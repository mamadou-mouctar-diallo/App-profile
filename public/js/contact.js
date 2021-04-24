
// Check if a field is empty
const isEmpty = function (elementValue) {
    return(
     elementValue === undefined ||
     elementValue === null ||
     (typeof(elementValue) === 'object' && Object.keys(elementValue).length === 0) ||
     (typeof(elementValue) === 'string' && elementValue.trim().length === 0)
    )
 }
 // Send a alert message
 const sendAlert = (element, message) => {
     element.classList.add('invalid')
     element.previousElementSibling.insertAdjacentHTML('beforeend', `<span class="msg">${message}</span>`)
 }
 // Reset the alert message
 const emptyAlert = (element) => {
     const preElSib = element.previousElementSibling
     element.classList.remove('invalid')
     while(preElSib.firstElementChild){
         preElSib.removeChild(preElSib.firstElementChild)
     }
     element.valid = true
 }
 // Check if a field is valid
 const isValid = function(element){
     message = "Field " + element.name + " is required" 
     if(element.type === "email"){
         if(isEmpty(element.value)){
             sendAlert(element, message)
             return false
         }else if(!isEmpty(element) && !element.checkValidity()){
             message = "Your email is incorrect"
             sendAlert(element, message)
             return false
         }else{
             return true
         }
     }else{
         if(element.checkValidity()){
             return true
         }else{
             sendAlert(element, message)
             return false
         }
     }
 }
 const form = document.getElementById('formContact')
 // Button for submitting form Contact
 form.addEventListener('submit', (event) =>{
     event.preventDefault()
     const elements = document.querySelectorAll('input[required], textarea[required]')
     isClicked = true
     elements.forEach((element) => {
         emptyAlert(element)
     })
     var isValidElement = true
     elements.forEach((element) => {
         if(!isValid(element)){
             isValidElement = false
         }
     })
     if(isValidElement){
         event.target.submit()
     }
 }, false)
 
 