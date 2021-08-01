import { useState } from 'react'
function QuestionForm(){
    const [inputValue, setInputValue] = useState("How old are you ?");
    function checkValue(value){
        !value.includes("f") ? setInputValue(value) : console.log("f should not exist")
    }
    return(
        <div>
            <textarea value={inputValue} onChange={(e)=>checkValue(e.target.value)}/>
            <button onClick={() => alert(inputValue)}>Alert me 🚨</button>
        </div>
    )
}
export default QuestionForm