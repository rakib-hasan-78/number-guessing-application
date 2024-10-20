import { setNumberValidator } from "./regex";

export const setHiddenNumber = (minimumValue, maximumValue) => {
  const form = document.getElementById('input-form');
  const inputField = document.getElementById('input-field-value');
  const errMsg = document.querySelector('.error-msg');
  const cancelIcon = document.querySelector('#icon-cancel');

  // Check if the section pattern has already been changed on page load
  const sectionChanged = localStorage.getItem('section-pattern');
  if (sectionChanged === 'true') {
    document.getElementById('number-input').classList.add('d-none');
    document.getElementById('number-guess-input').classList.remove('d-none');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hiddenValue = null;
    let allValid = true;
    let isValid = false;
    let error = null;
    let values;

    // Validate the input value
    if (inputField.type === 'text') {
      ({ isValid, error } = setNumberValidator(inputField.value.trim(), minimumValue, maximumValue));
    }

    if (!isValid) {
      errMsg.textContent = error;
      allValid = false;
    } else {
      hiddenValue = inputField.value.trim();
      errMsg.textContent = ``;
    }

    if (allValid) {
      let number = {
        hiddenNumber: form.querySelector('#input-field-value').value
      };

      hiddenValue = number.hiddenNumber;

      // Retrieve the stored value from sessionStorage
      let storedValue = sessionStorage.getItem('store-value');
      if (storedValue) {
        try {
          values = JSON.parse(storedValue);
          if (!Array.isArray(values)) {
            values = [];
          }
        } catch (error) {
          values = [];
        }
      } else {
        values = [];
      }

      // Store the new hidden value
      values.push(hiddenValue);
      sessionStorage.setItem('store-value', JSON.stringify(values));

      // Manage section pattern change
      function sectionChange() {
        document.getElementById('number-input').classList.add('d-none');
        document.getElementById('number-guess-input').classList.remove('d-none');
      }

      sectionChange();

      // Store the section change in localStorage
      localStorage.setItem('section-pattern', 'true');

      // Reset the form and cleanup
      inputField.classList.remove('is-valid', 'is-invalid');
      cancelIcon.classList.remove('d-inline-flex');
      cancelIcon.classList.add('d-none');
      form.reset();
    }
  });
};
