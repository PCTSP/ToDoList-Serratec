import React, {useState, useEffect, useRef} from 'react'

function Form(props) {

  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleUpdate = newTask => {
    setInput(newTask.target.value);
  };

  const handleSubmit = newTask => {
    newTask.preventDefault();

    props.onSubmit({
      id: Math.random(),
      text: input
    });

    setInput('');

  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
       type="text"
       placeholder='Adicionar tarefa' 
       value={input} 
       name="text"
       className='todo-input'
       onChange={handleUpdate}
       ref={inputRef}
       />
       <button className='todo-button'>Adicionar</button>
    </form>
  )
}

export default Form