import React, {useState} from 'react';
import Previous from './Previous.js';
import Current from './Current.js';
import Commands from './Commands.js';
import Operators from './Operators.js';
import Numbers from './Numbers.js';
import './App.css';



function App() {

  // the source of truth
  const [operator, setOperator] = useState(null);
  const [prevNum, setPrevNum] = useState(0);
  const [currNum, setCurrNum] = useState(null);
  const [result, setResult] = useState(null);

// to check values
  console.log("Previous: ", prevNum);
  console.log("current: ", currNum);
  console.log("operator: ", operator);
  console.log("result: ", result);



  return (
    <div className="calc">
<div className="calc__displays">
  <Previous resultVal={result} />
  <Current  currNumVal={currNum} resultVal={result}  />
</div>
      

<div className="calc__buttons">
      <Commands  
      currNumVal={currNum}
      currNumValSet={setCurrNum} 
      prevNumVal={prevNum} 
      prevNumValSet={setPrevNum}
      resultVal={result}
      resultValSet={setResult}
      operatorVal={operator}
      operatorValSet={setOperator}
      />

      <Operators 
      currNumVal={currNum}
      currNumValSet={setCurrNum} 
      prevNumVal={prevNum} 
      prevNumValSet={setPrevNum}
      resultVal={result}
      resultValSet={setResult}
      operatorVal={operator}
      operatorValSet={setOperator}
      />

      <Numbers 
      currNumVal={currNum}
      currNumValSet={setCurrNum} 
      />
</div>
      

    </div>
  );
}

export default App;
