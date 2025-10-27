/*File: App.jsx located in RootFolder/src/      */
import { useState } from "react";
import { sanitizeInput } from "./utils/sanitizeInput";
 
function App() {

  //initialize states for all input fields
  const [InputData, setInputData] = useState({
    userName: "",
    userAge: 0
  });
  //function to update values of states when user types
  const onChangeInputData = (event) => {
    setInputData({ ...InputData, [event.target.name]: event.target.value });
  };
 
  //When form is submitted
  const handleForm = (event)=>{
    event.preventDefault(); //avoid page loading when form is submitted

    //validating text field
    let userName_get = sanitizeInput(InputData.userName);//sanitizing now
    console.log("Name entered by User: ", userName_get);

    //validating number field
    let userAge_get = sanitizeInput(InputData.userAge);//sanitizing now
    console.log("Age entered by User: ", userAge_get);
  }
   
  return <div>
    <form onSubmit={handleForm}>
      <input type="text" name="userName" id="userName" value={InputData.userName} onChange={onChangeInputData} placeholder="Name here" />
      <input type="number" name="userAge" id="userAge" value={InputData.userAge} onChange={onChangeInputData} placeholder="0" />
      <button type="submit">Submit</button>
    </form>
  </div>
}
export default App;
