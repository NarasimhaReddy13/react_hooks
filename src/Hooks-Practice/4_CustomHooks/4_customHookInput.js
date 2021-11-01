import { useState } from "react";

function useCustomHookInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const reset = () => {
        setValue(initialValue)
    }

    const bind = {
        value: value,   // Use short hand syntax
        onChange: e => { setValue(e.target.value )}
    }
    return [value, bind, reset]
}
export default useCustomHookInput
