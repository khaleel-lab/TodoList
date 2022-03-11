import React, { useEffect, useRef, useState } from 'react';

import './SingleTodo.scss';

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
	const [edit, setEdit] = useState<boolean>(false);
	const [editTodo, setEditTodo] = useState<string>(todo.todo);

	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();

		setTodos(
			todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
		);
		setEdit(false);
	};

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	return (
		<form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
			{edit ? (
				<input
					ref={inputRef}
					type='text'
					value={editTodo}
					className='todos__single-text'
					onChange={(e) => setEditTodo(e.target.value)}
				/>
			) : todo.isDone ? (
				<s className='todos__single-text'>{todo.todo}</s>
			) : (
				<span className='todos__single-text'>{todo.todo}</span>
			)}

			<div>
				<span
					className='icon'
					onClick={() => {
						if (!edit && !todo.isDone) {
							setEdit(!edit);
						}
					}}
				>
					<AiFillEdit />
				</span>
				<span className='icon' onClick={() => handleDelete(todo.id)}>
					<AiFillDelete />
				</span>
				<span className='icon' onClick={() => handleDone(todo.id)}>
					<IoCheckmarkDoneSharp />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
