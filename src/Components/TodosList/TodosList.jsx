import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../store/coreSlice';
import TodosItem from '../TodosItem/TodosItem';
import s from './TodosList.module.css'

const TodosList = () => {
  
  const dispatch = useDispatch()
  const allTodos = useSelector(state => state.core.todos)
  const mode = useSelector(state => state.core.mode)
  const [todos, setTodos ] = useState(allTodos)

  useEffect(() => {
    if (mode === 'all') {setTodos(allTodos)}
    if (mode === 'active') {setTodos(allTodos.filter(el => el.done === false))}
    if (mode === 'done') {setTodos(allTodos.filter(el => el.done === true))}
  }, [mode, allTodos])

  const changeMode = (e) => {
    if (e.target.tagName !== 'LI') {return}
    console.log(e.target.dataset.mode)
    dispatch(setMode(e.target.dataset.mode))
  }
  
  return (
    <>
      <ul className={s.todosMode} onClick={(e) => changeMode(e)}>
        <li className={mode === 'all' ? s.todosModeItemActive : s.todosModeItem} data-mode="all">All</li>
        <li className={mode === 'active' ? s.todosModeItemActive : s.todosModeItem} data-mode="active">Active</li>
        <li className={mode === 'done' ? s.todosModeItemActive : s.todosModeItem} data-mode="done">Done</li>
      </ul>
      <ul>
        {todos.map(el => {
          return <TodosItem key={el.id} todo={el}/>
        })}
      </ul>
    </>
  );
};

export default TodosList;