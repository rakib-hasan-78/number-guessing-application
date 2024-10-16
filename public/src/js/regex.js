export const setNumberValidator = (value, minValue, maxValue) => {
    const valueTest = new RegExp("^\d+$");
    const trimmedValue = value.trim();
    let minValue;
    let maxValue;

    if (trimmedValue==='') {
        return{
            isValid: false,
            error: `ERROR! Can Not Be An Empty Value!`
        }
    }
    if (!valueTest.test(trimmedValue)) {
        return{
            isValid: false,
            error:`ERROR! ONly Integer Value Accepted`
        }
    }
    if (trimmedValue<=0) {
        return{
            isValid: false,
            error: `Invalid Number`
        }
    }
    if (trimmedValue>maxValue) {
        return{
            isValid: false,
            error: `Input Value Must Be ${minValue} to ${maxValue}`
        }
    }
    if (!isNaN(trimmedValue)) {
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

