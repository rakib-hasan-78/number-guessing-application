export const focusEventHandlers = (inputName, inputInfo , minimumValue, maximumValue) => {

    inputName.addEventListener('focus', (e)=>{
        if (!inputName.value) {
          inputInfo.innerText = `set a number between ${minimumValue} to ${maximumValue}`;
        }
    });
    
}

export const formClickEventHandlers = (form, input, inputInfo) => {

    form.addEventListener('click', (e)=>{
        if (document.activeElement!==input) {
          if (!input.value) {
            inputInfo.innerText = ``;
          }
        }
    });
}

// x mark function---->

export const xMarkFunction = (input, cancelIcon)=>{

    if (!input.value.trim()) {
        cancelIcon.classList.remove('d-inline-flex');
        cancelIcon.classList.add('d-none');
      } else {
        cancelIcon.classList.remove('d-none');
        cancelIcon.classList.add('d-inline-flex',);
      }
}

// valid context function 

export const isValidFunction = (input,validityMsg, inputInfo, text) => {

    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    validityMsg.textContent = ``;
    inputInfo.textContent = text;
}
// invalid context function ---->

export const notValidFunction = (input, inputInfo, presetMsg) => {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    inputInfo.textContent = presetMsg;
}

// x mark click event ----->

export const xMarkClickEvent = (cancelIcon, input, msg) => {

    cancelIcon.addEventListener('click', ()=>{

    input.value = '';
    input.classList.remove('is-valid', 'is-invalid');
    cancelIcon.classList.remove('d-inline-flex');
    cancelIcon.classList.add('d-none');
    msg.textContent=``;

    });
}
