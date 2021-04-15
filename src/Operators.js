import React, {useState} from 'react'
import uuid from 'react-uuid';
import './Operators.css';

function Operators(props){

    const[prevOperator, setPrevOperator] = useState('');
    
    let computation; 
    const buttonsArr = ['%','-','+','*','/','='];
    const buttons = buttonsArr.map(elem => {
        
        return <button 
        className="calc__operator" 
        key={uuid()}
        onClick={(e)=>setCalcOp(e.target.innerHTML)}
        >{elem}
        </button>
        
    });

// calculation functions

    function setCalcOp(op){
     
        if(op === '%' && (props.resultVal || props.currNumVal)){
             console.log('g')
            computation = Number(`${props.currNumVal ? parseFloat(props.currNumVal) : parseFloat(props.resultVal) }`)/100;
            props.resultValSet(computation);
            props.operatorValSet(null)
          // props.prevNumValSet(computation);
          props.currNumValSet([computation.toString()])
           
        }else if(!props.operatorVal && op != "%"){
           props.prevNumValSet(parseFloat(props.currNumVal));
           props.resultValSet(props.currNumVal + op);
           props.operatorValSet(op);
           props.currNumValSet(null)
           
         }else if(op != '=' && props.operatorVal === '=' ){
          props.operatorValSet(op);
         }else if(op == '=' && props.operatorVal === '='){
             props.operatorValSet(prevOperator);
         } else if(props.operatorVal && props.currNumVal) {
           switch(props.operatorVal){
             
            case '+': 
             computation = Number(props.prevNumVal) + Number(`${props.currNumVal? props.currNumVal:props.oldCurrVal}`)
             setPrevOperator(props.operatorVal);
             props.operatorValSet(op);
             props.currNumValSet(null)
             break;
             case '-': 
             computation = Number(props.prevNumVal) - Number(`${props.currNumVal? props.currNumVal:props.oldCurrVal}`)
             setPrevOperator(props.operatorVal);
             props.operatorValSet(op);
           props.currNumValSet(null)
        
             break;
             case '*': 
              computation = Number(props.prevNumVal) * Number(`${props.currNumVal? props.currNumVal:props.oldCurrVal}`)
              setPrevOperator(props.operatorVal);
              props.operatorValSet(op);
           props.currNumValSet(null)
             
             break;
             case '/': 
            computation = Number(props.prevNumVal) / Number(`${props.currNumVal? props.currNumVal:props.oldCurrVal}`)
            setPrevOperator(props.operatorVal);
            props.operatorValSet(op);
           props.currNumValSet(null)
             
             break;
             case '=':
               setCalcOp(props.operatorVal);
            break;
            
           }

           props.resultValSet(computation + op);
           props.prevNumValSet(computation);
           
   
         } else if( op && !props.currNumVal){
            props.prevNumValSet([parseFloat(props.prevNumVal)]);
            props.resultValSet(props.prevNumVal + op);
            props.operatorValSet(op);
            props.currNumValSet(null)
         }
         
         
         
       }
    

    return(
        <div className="calc__operators">
            {buttons}
        </div>
    )
}

export default Operators