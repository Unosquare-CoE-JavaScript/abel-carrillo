// TODO: Validatable interface
export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

// TODO: validate function
export function validate(validataleInput: Validatable) {
    let isValid = true;
    if (validataleInput.required) {
        isValid = isValid && validataleInput.value.toString().trim().length !== 0;
    }
    if (
        validataleInput.minLength != null &&
        typeof validataleInput.value === 'string'
    ) {
        isValid =
            isValid && validataleInput.value.length >= validataleInput.minLength;
    }
    if (
        validataleInput.maxLength != null &&
        typeof validataleInput.value === 'string'
    ) {
        isValid =
            isValid && validataleInput.value.length <= validataleInput.maxLength;
    }
    if (validataleInput.min != null && typeof validataleInput.value === 'number') {
        isValid = isValid && validataleInput.value >= validataleInput.min;
    }
    if (validataleInput.max != null && typeof validataleInput.value === 'number') {
        isValid = isValid && validataleInput.value <= validataleInput.max;
    }
    return isValid;
}
