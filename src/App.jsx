import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");
  let handleOnButtonClick = (item) => {
    // console.log("Button Clicked.",item);
    if (item === "C") {
      let newCalVal = "";
      setCalVal(newCalVal);
    } 
    else if(item === "="){
      try {
        
        const result = eval(calVal); 

        setCalVal(result.toString());
      } catch {
        setCalVal("Error");
      }
    }
    else {
      let newCalVal = calVal + item;
      setCalVal(newCalVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonContainer
        handleOnButtonClick={handleOnButtonClick}
      ></ButtonContainer>
    </div>
  );
}

export default App;
