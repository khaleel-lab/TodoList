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
		<div className='container'>
			<div className='todos'>
				<span className='todos__heading'>Active Tasks</span>
				{todos.map((todo) => (
					<SingleTodo
						todo={todo}
						todos={todos}
						key={todo.id}
						setTodos={setTodos}
					/>
				))}
			</div>
			<div className='todos remove'>
				<span className='todos__heading'>Completed Tasks</span>
				{todos.map((todo) => (
					<SingleTodo
						todo={todo}
						todos={todos}
						key={todo.id}
						setTodos={setTodos}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
