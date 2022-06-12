import React from 'react';
import { useDispatch} from 'react-redux';
import { changeDone } from '../../store/coreSlice';
import s from './TodosItem.module.css'

const TodosItem = ({todo}) => {
  const dispatch = useDispatch()

  const pressDone = (id) => {
    dispatch(changeDone(id))
  }
  return (
    <li className={s.todo}>
      <div className={todo.done === true ? s.todoItemDone : s.todoItem}>{todo.text}</div>
      <button onClick={() => pressDone(todo.id)}>{todo.done === false ? 'Done' : 'Rediscover'}</button>
    </li>
  );
};

export default TodosItem;