export const setNumberValidator = (value, minValue, maxValue) => {
    const valueTest = new RegExp("^\\d+$");
    const trimmedValue = value.trim();
    // if value is empty
    if (trimmedValue==='') {
        return{
            isValid: false,
            error: `ERROR! Can Not Be An Empty Value!`
        }
    }
    // if value is not an Integer
    if (!valueTest.test(trimmedValue)) {
        return{
            isValid: false,
            error:`ERROR! ONly Integer Value Accepted`
        }
    }
    // Convert string to number for comparison
    const numValue = Number(trimmedValue);

    if (!Number.parseInt(trimmedValue)) {
        return {
            isValid : false,
            error: `Error ! Floating Number Not Accepted!`
        }
    }

    // if value is less than minimum number
    if (numValue<minValue) {
        return{
            isValid: false,
            error: `Invalid Number`
        }
    }
    // if value is bigger than maximum number
    if (numValue>maxValue) {
        return{
            isValid: false,
            error: `Input Value Must Be ${minValue} to ${maxValue}`
        }
    }
    // if value is not a number 
    if (isNaN(trimmedValue)) {
        return{
            isValid: false,
            error: `ERROR OCCURRED : Must Have To Be A Number`
        }
    }

    return{
        isValid:true,
        error: null
    }
}

