import { useState } from "react"



const NotesForm = ({ methodArr }) => {

  const [taskTitle, setTaskTitle] = useState('')
  const [taskTag, setTaskTag] = useState('')

  
  
  const taskDetails = {
    id: Math.random(),
    taskTitle,
    taskTag,
    isDone: false
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!taskTitle || !taskTag) {
      return alert("Preencha todos os campos!")
    }
    methodArr(taskDetails)

    setTaskTag('')
    setTaskTitle('')
  }

  return (
    <div className="flex flex-col mb-5">
        <h2 className="text-center text-[20px]">Criar Tarefa</h2>
        <form className='flex flex-col items-center w-3/5 m-auto' onSubmit={handleSubmit}>
            <input className='w-full p-1.5 rounded-lg mb-2 text-slate-600 outline-none' onChange={(e) => setTaskTitle(e.target.value)} value={taskTitle} type="text" placeholder="Qual a tarefa ?"/>
            <select className='w-full p-1 rounded-lg mb-2 text-slate-600 outline-none' onChange={(e) => setTaskTag(e.target.value)} value={taskTag}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Outros">Outros</option>
            </select>
            <button className='bg-slate-400 w-full rounded-lg p-1 hover:bg-slate-200 text-slate-800' type="submit">Criar</button>
        </form>
    </div>
  )
}

export default NotesForm