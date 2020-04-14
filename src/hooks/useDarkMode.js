import React, { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue)
  
    // below code taken from lecture notes but was unnecessary:
    // const handleChanges = updatedValue => {
    //     setValue(updatedValue)
    // }

    useEffect(() => {
        const element = document.body
        if (value==true) {
            element.classList.add('dark-mode') 
        } else {
            element.classList.remove('dark-mode')
        }

    }, [value])

    return [value, setValue] // removed 'handleChanges' from returned values as per above notes



}