import React, { useRef } from 'react';

import './InputField.scss';

interface InputProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	// e: React.FormEvent
	// e: React.SyntheticEvent
	// e: React.ChangeEvent<HTMLInputElement>
	handleAddTask: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputProps> = ({ todo, setTodo, handleAddTask }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			className='input'
			onSubmit={(e) => {
				handleAddTask(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type='input'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				placeholder='Task Name'
				className='input__box'
			/>
			<button type='submit' className='input__submit'>
				Go
			</button>
		</form>
	);
};

export default InputField;
