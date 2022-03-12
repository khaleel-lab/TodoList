import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import './App.scss';

import { InputField } from './components';
import TodoList from './components/TodoList/TodoList';
import { TodoProps } from './constants/model';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todos, setTodos] = useState<TodoProps[]>([]);
	const [completedTodos, setCompletedTodos] = useState<TodoProps[]>([]);

	const handleAddTask = (e: React.FormEvent) => {
		e.preventDefault();

		if (todo) {
			setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
			setTodo('');
		}
	};

	const onDragEnd = (result: DropResult) => {
		console.log(result);
		const { source, destination } = result;

		if (!destination) return;

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		let add,
			active = todos,
			complete = completedTodos;

		if (source.droppableId === 'TodosList') {
			add = active[source.index];
			active.splice(source.index, 1);
		} else {
			add = complete[source.index];
			complete.splice(source.index, 1);
		}

		if (destination.droppableId === 'TodosList') {
			active.splice(destination.index, 0, add);
		} else {
			complete.splice(destination.index, 0, add);
		}

		setCompletedTodos(complete);
		setTodos(active);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className='app'>
				<span className='app__heading'>Taskify</span>

				<InputField
					todo={todo}
					setTodo={setTodo}
					handleAddTask={handleAddTask}
				/>

				<TodoList
					todos={todos}
					setTodos={setTodos}
					completedTodos={completedTodos}
					setCompletedTodos={setCompletedTodos}
				/>
			</div>
		</DragDropContext>
	);
};

export default App;
