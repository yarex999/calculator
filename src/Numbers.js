import React from 'react';
import uuid from 'react-uuid';
import './Numbers.css';

function Numbers({currNumVal, currNumValSet}){
    const buttonsArr = ['1','2','3','4','5','6','7','8','9','+/-', '0', '.' ];
    const buttons = buttonsArr.map(elem => {
        switch(elem){
            case '.':
                return <button
                className="calc__number"  
                key={uuid()}
                onClick={currNumVal?(e)=>setCalcNum(e.target.innerHTML): ()=> console.log('wrong operator') }
                >{elem}
                </button>
            case '+/-':
                return <button
                className="calc__number"  
                key={uuid()}
                onClick={changeSign}
                >{elem}
                </button>
            default:
                return <button
                className="calc__number"  
                key={uuid()}
                onClick={(e)=>setCalcNum(e.target.innerHTML)}
                >{elem}
              </button>   
        }
    });

// set current number
    function setCalcNum(num){
       
        if(!currNumVal){
        currNumValSet(num);
          console.log(currNumVal)
        } else {
        currNumValSet([currNumVal + num]);
          console.log(currNumVal)
        }
      }

//  change the sign of the current number ( - ? + : - )
      function changeSign(){
        console.log(currNumVal)
        if(currNumVal){
         let changedNum; 
         console.log(currNumVal)
     
         let varNum = currNumVal[0];
         console.log(varNum)
         varNum.indexOf('-') >=0 ? changedNum = varNum.substr(1) : changedNum = '-' + varNum;
         currNumValSet([changedNum]); 
          
        }
      }


    return (
        <div className="calc__numbers">
            {buttons}
        </div>
    )
}

export default Numbers