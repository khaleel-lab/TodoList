import React, { useState } from 'react';

import { InputField } from './components';
import './App.scss';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState([]);

	return (
		<div className='app'>
			<span className='app__heading'>Taskify</span>

			<InputField todo={todo} setTodo={setTodo} />
		</div>
	);
};

export default App;
