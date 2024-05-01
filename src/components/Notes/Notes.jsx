import { Check, Trash2 } from 'lucide-react'
import { useState, useContext } from 'react';

import { DateContext } from '../../context/DateContext';

const Notes = ({todoList, deleteTask}) => {
  

  const { date } = useContext(DateContext)

  const [done, setDone] = useState(1)

  
  const handleDone = () => {
    todoList.isDone === false ? setDone(0.5) : setDone(1)
  }

  return (
    <div style={{opacity: done}} className='bg-slate-600 rounded-xl p-2 flex items-center justify-between'>
      <div>
        <p className='text-[14px]'>{date}</p>
        <p className='text-[18px]'>{todoList.taskTitle}</p>
        <span className='text-[12px] bg-slate-300 text-slate-600 px-1 rounded-lg'>{todoList.taskTag}</span>
      </div>
      <div className='flex gap-4 border-l-2 pl-2 ml-3'>
        <span className='cursor-pointer' onClick={handleDone}><Check/></span>
        <span className='cursor-pointer' onClick={() => deleteTask(todoList.id)}><Trash2/></span>  
      </div>
    </div>
  )
}

export default Notes