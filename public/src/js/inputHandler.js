import { CustomError } from "./customError";
import { setNumberValidator } from "./regex";

export const insertInputFunction = (minimumValue , maximumValue) => {
  
    const inputForm = document.getElementById('input-form');
    const inputInfo = document.getElementById('input-info');
    const inputFieldValue = document.getElementById('input-field-value');
    const cancelIcon = document.getElementById('icon-cancel');
    const errorMsg = document.querySelector('.error-msg');
 
    // bring inputInfo content ---->
    inputFieldValue.addEventListener('focus', (e)=>{
      if (!inputFieldValue.value) {
        inputInfo.innerText = `set a number between ${minimumValue} to ${maximumValue}`;
      }
    });
    // hide the value if there is click outside the inputField--->
    inputForm.addEventListener('click', (e)=>{
      if (document.activeElement!==inputFieldValue) {
        if (!inputFieldValue.value) {
          inputInfo.innerText = ``;
        }
      }
    });
    // vising x mark & validation handling----->
    inputFieldValue.addEventListener('input', (e)=>{
      // x mark---->
      if (!inputFieldValue.value.trim()) {
        cancelIcon.classList.remove('d-inline-flex');
        cancelIcon.classList.add('d-none');
      } else {
        cancelIcon.classList.remove('d-none');
        cancelIcon.classList.add('d-inline-flex',);
      }
      // validation ----->
      try {
        let presetMsg = `Set a number between ${minimumValue} to ${maximumValue}`;
        let validator;
        if (e.target.type==='text') {
          validator = setNumberValidator(e.target.value, minimumValue, maximumValue);
        }
        const {isValid, error} = validator;
        if (isValid) {
          inputFieldValue.classList.remove('is-invalid');
          inputFieldValue.classList.add('is-valid');
          errorMsg.textContent = ``;
          inputInfo.textContent = `Fantastic!! value inserting done successfully!`
        } else if (e.target.value.trim()==='') {
          inputFieldValue.classList.remove('is-valid');
          inputFieldValue.classList.add('is-invalid');
          inputInfo.textContent = presetMsg;
          throw new CustomError(error);
  
        } else{
          inputFieldValue.classList.remove('is-valid');
          inputFieldValue.classList.add('is-invalid');
          inputInfo.textContent = presetMsg;
          throw new CustomError(error)
        }
  
      } catch (error) {
        errorMsg.textContent = error.message;
      }
    });
    // handling x mark
    cancelIcon.addEventListener('click', ()=>{
      inputFieldValue.value = '';
      cancelIcon.classList.remove('d-inline-flex');
      cancelIcon.classList.add('d-none');
      inputFieldValue.classList.remove('is-valid', 'is-invalid');
      errorMsg.textContent=``;
    });
    
  }

