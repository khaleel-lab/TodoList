import React from 'react';

import { TodoProps } from '../../constants/model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

// Writting Props With Type instead of interfae
type SingleTodoProps = {
	todo: TodoProps;
	todos: TodoProps[];
	setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
	return (
		<form className='todos__single'>
			<span className='todos__single-text'>{todo.todo}</span>

			<div>
				<span className='icon'>
					<AiFillEdit />
				</span>
				<span className='icon'>
					<AiFillDelete />
				</span>
				<span className='icon'>
					<IoCheckmarkDoneSharp />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
