import { useState } from "react"

function TodoForm({onAdd}) {

    const [inpValue,setInpValue]=useState('')

    function handleAddTodo(event){
        event.preventDefault()
        onAdd(inpValue)
        setInpValue('')
    }
  return (
    <form onSubmit={handleAddTodo} className=" bg-blue-400 p-5">
      <input type="text" value={inpValue} onChange={(e)=>setInpValue(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default TodoForm
