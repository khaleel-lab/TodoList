import React, { useState } from 'react';

import './App.scss';

import { InputField } from './components';
import { TodoProps } from './constants/model';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<TodoProps[]>([]);

	const handleAddTask = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo('');
		}
	};

	return (
		<div className='app'>
			<span className='app__heading'>Taskify</span>

			<InputField todo={todo} setTodo={setTodo} handleAddTask={handleAddTask} />

			{todos.map((t) => (
				<li>{t.todo}</li>
			))}
		</div>
	);
};

export default App;
