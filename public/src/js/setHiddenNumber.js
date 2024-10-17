import { setNumberValidator } from "./regex";

export const setHiddenNumber = (minimumValue, maximumValue, hiddenValue) => {
    const form = document.getElementById('input-form');
    const inputField = document.getElementById('input-field-value');
    const errMsg = document.querySelector('.error-msg');
    const cancelIcon = document.querySelector('#icon-cancel');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let allValid = true;
      let isValid = false;
      let error = null;
      let values;
      if (inputField.type==='text') {
        ({isValid, error}=setNumberValidator(inputField.value.trim(), minimumValue,maximumValue))
      }
      if (!isValid) {
        errMsg.textContent = error;
        allValid = false;
  
      } else{
        hiddenValue = inputField.value.trim();
        errMsg.textContent=``
      }
      if (allValid) {
        let number = {
          hiddenNumber: form.querySelector('#input-field-value').value
        }
        hiddenValue = number.hiddenNumber;
        let storedValue = sessionStorage.getItem('store-value');
        if (storedValue) {
          try {
            values = JSON.parse(storedValue);
            if (!Array.isArray(values)) {
              values= []
            }
          } catch (error) {
            values = []
          }
        }else {
          values =[]
        }
        values.push(hiddenValue)
        sessionStorage.setItem('store-value',JSON.stringify(values))
        inputField.classList.remove('is-valid', 'is-invalid');
        cancelIcon.classList.remove('d-inline-flex');
        cancelIcon.classList.add('d-none');
        form.reset();
      }
      console.log(hiddenValue);
    });
  
 }