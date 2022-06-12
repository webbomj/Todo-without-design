import { useState } from 'react';
import { useDispatch} from 'react-redux';
import './App.css';
import TodosList from './Components/TodosList/TodosList';
import { addTodo } from './store/coreSlice';

function App() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  // const state = useSelector(state => state.core.todos)
  // const mode = useSelector(state => state.core.mode)

  const createTodoObj = () => {
    return {
      "id": Math.random(),
      "text": todo,
      "done": false
    }
  }

  const addNewTodo = () => {
    if (todo.trim() === "") {return}
    const todoObj = createTodoObj()
    dispatch(addTodo(todoObj))
    setTodo('') 
  }
 
  const handleChangeInput = (e) => {
    setTodo(e.target.value)
  }

  const handleClickButton = () => {
    addNewTodo()
  }

  const handlekeyDownButton = (e) => {
    if (e.key !== 'Enter') {return}
    addNewTodo()
  }

  return (
    <div className="App">
    <h1>Simple Todo with out Design</h1>
    <input value={todo} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => handlekeyDownButton(e)}/>
    <button onClick={() => handleClickButton()} >Enter</button>
      <TodosList/>

    </div>
  );
}

export default App;
