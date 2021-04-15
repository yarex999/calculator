import React from 'react';
import './Current.css'


function Current({currNumVal, resultVal}){
    return (<>       

    <input disabled className="calc__display-current" value={currNumVal? currNumVal: resultVal? parseFloat(resultVal):'0'}/>
    
   

    </>)
}

export default Current