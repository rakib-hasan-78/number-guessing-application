import { CustomError } from "./customError";
import { focusEventHandlers, formClickEventHandlers, isValidFunction, notValidFunction, xMarkClickEvent, xMarkFunction } from "./handlers";
import { setNumberValidator } from "./regex";

export const insertInputFunction = (minimumValue , maximumValue) => {
  
    const inputForm = document.getElementById('input-form');
    const inputInfo = document.getElementById('input-info');
    const inputFieldValue = document.getElementById('input-field-value');
    const cancelIcon = document.getElementById('icon-cancel');
    const errorMsg = document.querySelector('.error-msg');
 
    // bring inputInfo content ---->
    focusEventHandlers(inputFieldValue,inputInfo, minimumValue,maximumValue);
    // hide the value if there is click outside the inputField--->
    formClickEventHandlers(inputForm,inputFieldValue,inputInfo);

    // vising x mark & validation handling----->
    inputFieldValue.addEventListener('input', (e)=>{
      // x mark---->
      xMarkFunction(inputFieldValue, cancelIcon);

      // validation ----->
      try {
        let presetMsg = `Set a number between ${minimumValue} to ${maximumValue}`;
        let validator;
        if (e.target.type==='text') {
          validator = setNumberValidator(e.target.value, minimumValue, maximumValue);
        }
        const {isValid, error} = validator;
        if (isValid) {
          isValidFunction(inputFieldValue,errorMsg,inputInfo,`Fantastic!! value inserting done successfully!`)
        } else if (e.target.value.trim()==='') {
          // inValid context function ---->
          notValidFunction(inputFieldValue, inputInfo, presetMsg);
          throw new CustomError(error);
  
        } else{
          // invalid context function  ---->
          notValidFunction(inputFieldValue, inputInfo, presetMsg);
          throw new CustomError(error)
        }
  
      } catch (error) {
        errorMsg.textContent = error.message;
      }
  });
  // handling x mark
  xMarkClickEvent(cancelIcon, inputFieldValue, errorMsg);

}

