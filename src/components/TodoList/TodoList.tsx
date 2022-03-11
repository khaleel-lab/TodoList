import React from 'react';

import './TodoList.scss';

import { TodoProps } from '../../constants/model';
import { SingleTodo } from '..';

interface TodoListProps {
	todos: TodoProps[];
	setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
	return (
		<div className='todoList'>
			{todos.map((todo) => (
				<SingleTodo
					todo={todo}
					key={todo.id}
					todos={todos}
					setTodos={setTodos}
				/>
			))}
		</div>
	);
};

export default TodoList;
