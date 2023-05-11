import { useState } from "react"



export const useCounter = (initialValue = 2) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCounter(counter + 1)
    }
    const decrement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCounter(counter - 1)
    }
    const reset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setCounter(initialValue)
    }


    return {
        counter,
        increment,
        decrement,
        reset

    }

} 