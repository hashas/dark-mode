import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    // check out localStorage
    console.log(window.localStorage)
    const [storedValue, setStoredValue] = useState(() => {
       const item = window.localStorage.getItem(key)
        // query local storage for 'key' parameter
        // if key is true, get the value from JSON and convert to
        // JS, else set to false
       return item ? JSON.parse(item) : initialValue; 
    })
    // define a function that sets the value to storage by converting 
    // JS object to JSON string
    const setValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value)
    }
    // i.e. this returns 'false' (because that's our initial value, and 'setValue' function
    return [storedValue, setValue]
}