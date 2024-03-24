import React,{useState,useRef,useEffect} from 'react'

function Apptodo() {
    const[name,setName] = useState("");
    const[display,setDisplay]= useState([]);
    const[error,setError]= useState("");
    const inputRef=useRef(null)


    const handleDelete=(index)=>{
      const updateDelete = display.filter((_,i)=> i !== index);
      setDisplay(updateDelete);
      setError("")
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    useEffect(() => {
      inputRef.current.focus();
    }, []);

  return (
    <div>
     <form onSubmit={handleSubmit}>
      <h1>TODO LIST</h1>
      <input type="text" value={name} ref={inputRef} onChange={(e)=>setName(e.target.value)} placeholder='Type here...'/>
      <button onClick={()=>{
        if(display.includes(name)){
            setError("already exist")
        }else{
            setDisplay([...display,name])
            setName("")
            setError("")
        }
      }}> Add</button>
      <h1 style={{color:"red"}}>{error}</h1>
      <div>
        <ul>
        {
            display.map((value,index)=>(
                <li key={index}>
                    <h5>{value}</h5>
                    <button onClick={()=> handleDelete(index)}>Delete</button>
                </li>

            ))
        }
        </ul>
      </div>
</form>
    </div>
  )
}

export default Apptodo
