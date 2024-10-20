import { CustomError } from "./customError";
import { focusEventHandlers, formClickEventHandlers, isValidFunction, notValidFunction, xMarkClickEvent, xMarkFunction } from "./handlers";
import { setNumberValidator } from "./regex";


export const guessInputHandler = (minimumValue, maximumValue) => {

    const guessInfo = document.getElementById('guess-info');
    const guessForm = document.getElementById('guess-form');
    const numberMatchingField = document.getElementById('number-guess-input-field');
    const numberGuessCancel = document.getElementById('number-guess-cancel');
    const guessValidityMsg = document.getElementById('guess-validityMsg');
  
    // input focus event handler
    focusEventHandlers(numberMatchingField,guessInfo, minimumValue, maximumValue);
    // form click focusEventHandlers
  
    formClickEventHandlers(guessForm,numberMatchingField, guessInfo);
  
    // input field validation handler
  // Event listener for the guess number input field
  numberMatchingField.addEventListener('input', (e) => {
    // Visualizing X mark
    xMarkFunction(numberMatchingField, numberGuessCancel);
    xMarkClickEvent(numberGuessCancel, numberMatchingField,  guessValidityMsg);
    try {
      let presetMsg = `Set a number between ${minimumValue} to ${maximumValue}`;
      let validation;
      if (e.target.name==='guess-value') {
        validation = setNumberValidator(e.target.value, minimumValue, maximumValue);
      }
      if (validation) {
  
        const {isValid , error} = validation;
        console.log("Input Value:", e.target.value); // Log the input
        console.log("Validation Result:", validation)
  
        if (isValid) {
          isValidFunction(numberMatchingField, guessValidityMsg, guessInfo, ` ${e.target.value.trim()} valid number, now check your luck ! `);
        } else if (e.target.value.trim()==='') {
          notValidFunction(numberMatchingField, guessInfo, presetMsg);
          throw new CustomError(error);
        }else {
          notValidFunction(numberMatchingField, guessInfo, presetMsg);
          throw new CustomError(error)
        }
        
      }
    } catch (error) {
      guessValidityMsg.textContent = error.message;    
    }
    });
  }





// export const guessInputHandler = (minimumValue, maximumValue) => {
//   const guessInfo = document.getElementById('guess-info');
//   const guessForm = document.getElementById('guess-form');
//   const numberMatchingField = document.getElementById('number-guess-input-field');
//   const numberGuessCancel = document.getElementById('number-guess-cancel');
//   const guessValidityMsg = document.getElementById('guess-validityMsg');

//   // input focus event handler
//   focusEventHandlers(numberMatchingField, guessInfo, minimumValue, maximumValue);
//   // form click focusEventHandlers
//   formClickEventHandlers(guessForm, numberMatchingField, guessInfo);

//   // input field validation handler
//   numberMatchingField.addEventListener('input', (e) => {
//       // Visualizing X mark
//       xMarkFunction(numberMatchingField, numberGuessCancel);
//       xMarkClickEvent(numberGuessCancel, numberMatchingField, guessValidityMsg);

//       try {
//           let presetMsg = `Set a number between ${minimumValue} to ${maximumValue}`;
//           let validation;

//           if (e.target.name === 'guess-value') {
//               validation = setNumberValidator(e.target.value, minimumValue, maximumValue);
//           }

//           if (validation) {
//               const { isValid, error } = validation;

//               if (isValid) {
//                   isValidFunction(numberMatchingField, guessValidityMsg, guessInfo, `${e.target.value.trim()} is a valid number, now check your luck!`);
//               } else if (e.target.value.trim() === '') {
//                   notValidFunction(numberMatchingField, guessInfo, presetMsg);
//                   throw new CustomError(error);
//               } else {
//                   notValidFunction(numberMatchingField, guessInfo, presetMsg);
//                   throw new CustomError(error);  // Ensure 'error' is defined here
//               }
//           }
//       } catch (error) {
//           // Ensure the error has a message property
//           guessValidityMsg.textContent = error.message ? error.message : 'An unknown error occurred.';
//       }
//   });
// }
