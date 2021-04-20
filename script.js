let fullName =  document.querySelector('#fullName');
fullName.setAttribute('required', 'required');

let emailAddress = document.querySelector('#emailAddress');
emailAddress.setAttribute('required', 'required');

let phoneNumber = document.querySelector('#phoneNumber');
phoneNumber.setAttribute('required', 'required');

let message = document.querySelector('#message');
message.setAttribute('required', 'required');

let submitButtonEl = document.querySelector('#contact-submit');
let alertBoxElement = document.querySelector('#alert');

let numValidate = document.querySelector('#numValidate');
console.log(numValidate)

submitButtonEl.addEventListener(('click'),()=>{
    if(fullName.value === "" || emailAddress.value === "" || phoneNumber.value === "" ||message.value == ""){
        alertBoxElement.innerHTML = `All fields are required.`;
        alertBoxElement.style.display = 'block';
    }else if(phoneNumber.value.length >10){
        numValidate.innerHTML = `Phone number should not be more than 10 digits`;
        numValidate.style.display = "block";
    }
    else if(phoneNumber.value.length <10){
        numValidate.innerHTML = `Phone number should not be less than 10 digits`;
        numValidate.style.display = "block";
    }
    else if(isNaN(phoneNumber.value)){
        numValidate.innerHTML = `Enter a valid phone number`;
        numValidate.style.display = "block";
    }
    else if(phoneNumber.value[0] !== "0"){
        numValidate.innerHTML = `Phone number should start with a zero`;
        numValidate.style.display = "block";
    }else{
        alertBoxElement.innerHTML = `You have successfully submitted your enquiry.`;
        alertBoxElement.style.display = 'block';
        alert(`
            Name: ${fullName.value}
            Email: ${emailAddress.value}
            Phone Number: ${phoneNumber.value}
            Message: ${message.value}
        `)
    }
})







    

    
   
     

   