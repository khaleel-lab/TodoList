import React, { useState } from 'react';

import './App.scss';

import { InputField } from './components';
import TodoList from './components/TodoList/TodoList';
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

			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
