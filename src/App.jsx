
import './App.css'

import Navbar from '../src/components/Navbar/Navbar'
import Notes from '../src/components/Notes/Notes'
import NotesForm from './components/NotesForm/NotesForm'
import { useState } from 'react'


function App() {



  const [todosList, setTodosList] = useState([])

  const methodArr = (data) => {
    setTodosList((prevState) => [...prevState, data])
    
  }

  const deleteTask = (id) => {
    
    const filtered = todosList.filter((todo) => todo.id !== id)
    
    setTodosList(filtered)
  }


  
  return (
    <div className="container bg-slate-700 w-3/5 max-w-screen-lg min-w-fit m-auto my-40 p-6 rounded-lg" >
      <Navbar/>
      <hr/>
      <div className="content mt-5 flex flex-col ">
        <NotesForm  methodArr={methodArr}/>
        {/* notes abaixo */}
        {todosList.length === 0 ? (<h2 className='text-[24px]'>No Tasks!</h2>) : (
          todosList.map((todo) => (
            <Notes key={todo.id} todoList={todo} deleteTask={deleteTask}/>
          ))
        )}
      </div>
    </div>
  )
}

export default App


// função delete
// função complete
// como passar valores de dia e hora para o componente
// ordenar por tipo
// alguma forma de manter os dados das tasks
// implementar dia da semana navbar