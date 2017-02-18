import React from 'react';
import uniqueId from 'lodash.uniqueid';
const AddTodo=({addTodo})=>{
	const onSubmit=(e)=>{
		e.preventDefault();
		const inputNode=document.getElementById('todo-value');
		const value=inputNode.value;
		const todo={
			name:value,
			completed:false,
			id:uniqueId(),
			isEditing:false
		}
		addTodo(todo);
		inputNode.value='';
	}
	return(
		<form className="input-group" onSubmit={onSubmit}>
			<input type="text" className="form-control" id="todo-value"/>
			<div className="input-group-btn">
				<button className="btn btn-success">Add Todo</button>
			</div>
		</form>
	);
}
export default AddTodo;