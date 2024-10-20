import { setNumberValidator } from "./regex";

export const numberChallenge = (minimumValue, maximumValue) => {
    const guessInfo = document.getElementById('guess-info');
    const form = document.getElementById('guess-form');
    const input = document.getElementById('number-guess-input-field');
    const btn = document.getElementById('btn-num-check');
    const confirmMsgColor = document.querySelector('.valid-color');
    const guessMsg = document.getElementById('guess-validityMsg');

    let chances = 3; // Initialize chances outside the event listener
    

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        let isValid = false;
        let error = null;
        let allValid = true;

        // Validation logic
        if (input.name === 'guess-value') {
            ({ isValid, error } = setNumberValidator(input.value.trim(), minimumValue, maximumValue));
        }

        try {
            if (!isValid) {
                throw new CustomError(error); // Custom error handling
            }
        } catch (error) {
            guessMsg.textContent = error.message; // Display the custom error message
            allValid = false;
        }

        // Proceed if input is valid
        if (allValid) {
            const storedValues = JSON.parse(sessionStorage.getItem('store-value'));
            const hiddenValue = storedValues ? storedValues[storedValues.length - 1] : null;

            if (hiddenValue !== null) {
                // Check if the guessed number matches the hidden number
                if (hiddenValue === input.value.trim()) {
                    guessInfo.textContent = `CONGRATULATIONS....`;
                    confirmMsgColor.classList.remove('text-danger');
                    confirmMsgColor.classList.add('text-info');
                    confirmMsgColor.textContent = `Winner! ${input.value} is the right answer`;

                    // Remove 'section-pattern' from localStorage after success and change section
                    setTimeout(() => {
                        document.getElementById('number-input').classList.remove('d-none');
                        document.getElementById('number-guess-input').classList.add('d-none');
                        localStorage.removeItem('section-pattern');
                    }, 2000);
                    
                } else {
                    // Decrement chances and display remaining chances
                    chances -= 1;
                    confirmMsgColor.classList.remove('text-info');
                    confirmMsgColor.classList.add('text-danger');
                    confirmMsgColor.textContent = `You have ${chances} chances left`;

                    // Disable the button if no chances are left
                    if (chances === 0) {
                        btn.disabled = true;
                        input.disabled = true;
                        guessInfo.textContent = `Loser! The answer was ${hiddenValue}`;
                        btn.classList.add('cursor-wait', 'bg-white', 'text-info', 'fw-bolder');
                        btn.classList.remove('cursor-pointer', 'gradient-bg-button');
                        btn.innerHTML = `<i class="bi bi-dash-circle-dotted"></i> DISABLED!!`;
                    }
                }
            }
        }
    });
};
