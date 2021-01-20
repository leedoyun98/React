import React, {useContext} from 'react'
import {NumberContext} from './NumberProvider'
import {DisplayStyles} from './styles/Style'

const Display = () =>{
    const {number, storedNumber, functionType} = useContext(NumberContext)
    
    return (<DisplayStyles>
        <h2 className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
            {!number.length && !storedNumber.length > 12 ? '0':number || storedNumber}
        </h2>
        <p className={storedNumber && storedNumber.length > 12 ? 'long-main-display': undefined}>
        {!storedNumber ? `값을 입력해주세요`:`${storedNumber} ${functionType} ${number}`}
        
        </p>
    </DisplayStyles>)
    
}

export default Display