import React from 'react';
import uuid from 'react-uuid';
import './Commands.css';

function Commands(props){

    const buttonsArr=['AC','backspace'];

    const buttons = buttonsArr.map( elem => {
        switch(elem){
            case 'AC':
             return <button 
             className="calc__command" 
             key={uuid()}
             onClick={clearAll}
             >
               {elem}
             </button>
            case 'backspace':
             return <button 
             className="calc__command" 
             key={uuid()}
             onClick={cutCurrentNum}
             >
               {elem}
             </button>
        }
    });

    // clear calculator
    function clearAll(){
        if(props.operatorVal && props.resultVal || props.currNumVal){
            props.operatorValSet(null);
            props.resultValSet(null);
            props.currNumValSet(null);
            props.prevNumValSet(0);
        }
      }

    // edit current number
      function cutCurrentNum(){
        if(props.currNumVal){
        props.currNumValSet([props.currNumVal[0].split('').slice(0, props.currNumVal[0].length - 1).join('').toString()])
        }
      }

    return(
        <div className="calc__commands">
            {buttons}
        </div>
    ) 
}

export default Commands;