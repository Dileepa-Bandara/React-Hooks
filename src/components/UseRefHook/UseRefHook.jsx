import React,{useState,useEffect,useRef} from 'react'

function UseRefHook() {

    const [string,setString] = useState("");
    const refValue = useRef(0)
    const focusInput = useRef()
    const prevInputValue = useRef("")


    useEffect(()=>{
        refValue.current = refValue.current+1;
        prevInputValue.current = string;
       
    },[string])
    return (
        <div>
            <h3>UseRef Hook</h3>
            <p style={{color:"red"}}>1)If we update current value of a ref,it's not re render the component likes update state value ,and we can use this to store values </p>
            <p style={{color:"red"}}>2)Accessing dom elements(foucusing input by Clicking ) </p>
            <p style={{color:"red"}}>3)We can get previous value by using ref </p>
    <h6>Number of times upadate the input value {refValue.current}</h6>
    <h6>Previous Input Value {prevInputValue.current}</h6>

    <h5>My Name is {string }</h5>
    <input type="text" ref={focusInput} onChange =  {(e)=>{setString(e.target.value)}}/>
    <button onClick={()=>{focusInput.current.focus()}}>FOCUS INPUT</button>
            
        </div>
    )
}

export default UseRefHook
