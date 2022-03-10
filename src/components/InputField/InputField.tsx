import React from 'react';

import './InputField.scss';

interface InputProps {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<InputProps> = ({ todo, setTodo }) => {
	return (
		<form className='input'>
			<input
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
