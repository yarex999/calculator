import React from 'react';
import './Previous.css'

function Previous({resultVal}){

    return (<>
        <input disabled className="calc__display-previous" value={resultVal?resultVal:''} /> 
        
        
</>)
}

export default Previous