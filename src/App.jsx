import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";




function App() {
  const [todo, setodo] = useState("")
  const [todos, setodos] = useState([])
  const [showfinished, setshowfinished] = useState(false)

  const togglefinished = (e) => {
    setshowfinished(!showfinished)
  }



  const storeToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  useEffect(() => {
    let todoString=localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"))
      setodos(todos)
    }
  }, [])

  const handleEdit = (id) => {
    let t = todos.filter(i => {
      return i.id == id
    })
    console.log(t)
    setodo(t[0].todo)

    let newtodos = todos.filter(i => {
      return i.id !== id;
    })
    setodos(newtodos)
    storeToLS()
  }

  const handleDelete = (id) => {
    let newtodos = todos.filter(item => {
      return item.id != id;
    }
    )
    confirm("are you sure you want to delete") ? setodos(newtodos) : ""
    storeToLS()
  }


  const handleChange = (e) => {
    setodo(e.target.value)
    // console.log(todo)
  }

  const handleSave = () => {
    if (todo) {
      setodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
      setodo("")
      console.log(todos)
      storeToLS()
    }
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id)
    let index = todos.findIndex(item => {
      return item.id == id;
    })

    // console.log(index)
    let newtodos = [...todos];
    newtodos[index].isCompleted = !newtodos[index].isCompleted;
    setodos(newtodos)
    storeToLS()

    // console.log("checkboc clicked")
    // console.log(newtodos)
  }


  return (
    <>
      <Navbar />

      <div className="card bg-amber-200 w-[95%] mx-auto px-6 rounded-xl min-h-140 my-12 md:w-1/2">
        <div className="hero">
          <h1 className='font-bold md:mx-20 py-4 text-2xl text-center'>iTask-Manage your todos at one place</h1>
          <h2 className='font-bold text-lg'>Add Todo</h2>

          <input type="text" className='bg-amber-50 w-[80%] rounded-xl py-1 ' value={todo} onChange={handleChange} />
          <button className='bg-green-500 px-4 py-1 rounded-xl my-2 md: mx-1 text-white hover:bg-green-600' onClick={handleSave}>Save</button>

          <div className="finished flex gap-1">
            <input type="checkbox" name="submit" id="" onChange={togglefinished} />
            <p className=' font-bold md:text-lg'>Show finished</p>
          </div>

          <div className="divider w-[96%] h-1 opacity-50 mx-auto my-2 bg-black"></div>
        </div>

        <div className="content">
          <h1 className='font-bold md:text-lg'>Your Todos</h1>

          {todos.length == 0 && <div className='mx-2 my-2'>No todos to display</div>}

          {todos.map(item => {

            return (showfinished || !item.isCompleted) && <div key={item.id} className="options flex  my-3 justify-between md:w-[60%]">
              <div className="todolist flex gap-4">
                <input onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex  my-1   h-full gap-3 sd:{mx-auto bg-red-600} ">
                <FaEdit className='w-7 rounded text-xl' onClick={() => handleEdit(item.id)} />
                <MdDelete className='w-7 text-xl' onClick={() => { handleDelete(item.id) }} name={item.id} />
              </div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default App
