import React, {useContext} from 'react'
import {NumberContext} from './NumberProvider'

const EqualButton = () =>{
    const {doMatch}  = useContext(NumberContext)
    return (
    <button type={"button"} className={"white-button"} onClick={
        () => doMatch()
    }> =

    </button>)
    
}

export default EqualButton