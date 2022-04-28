import React,{useState} from 'react'

const Calculator = () => {
    const [data, setdata] = useState("");
    const [result,setresult]=useState(0);
    const onchange = e => {
        setdata(e.target.value)
    };
    return (
        <div>
            <h2>Calculator App</h2>
            <input type='text' value={data} name='data' onChange={onchange} /><br />
            <button onClick={()=>setresult(eval(data))}>Result</button>
            <button onClick={()=>setresult(0)}>Reset</button><br/>

            <h4>Result : {result}</h4>
            <button onClick={()=>setdata(data+'1')}>1</button>
            <button onClick={()=>setdata(data+'2')}>2</button>
            <button onClick={()=>setdata(data+'3')}>3</button><br/>
            <button onClick={()=>setdata(data+'4')}>4</button>
            <button onClick={()=>setdata(data+'5')}>5</button>
            <button onClick={()=>setdata(data+'6')}>6</button><br/>
            <button onClick={()=>setdata(data+'7')}>7</button>
            <button onClick={()=>setdata(data+'8')}>8</button>
            <button onClick={()=>setdata(data+'9')}>9</button><br/>
            <button onClick={()=>setdata(data+'0')}>0</button>
            <button onClick={()=>setdata(data+'+')}>+</button>
            <button onClick={()=>setdata(data+'-')}>-</button><br/>
            <button onClick={()=>setdata(data+'*')}>*</button>
            <button onClick={()=>setdata(data+'/')}>/</button>
            <button onClick={()=>setdata('')}>clr</button>
            
        </div>
    );
}

export default Calculator
