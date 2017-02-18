import React from 'react';

const List=({todos,deleteTodo,editTodo,saveTodo,cancel})=>{
	const handleSaveTodo=(id)=>{
		const payload={
			name:document.getElementById(`task${id}`).value,
			isEditing:false
		};
		saveTodo(id,payload);
	}
	const List=todos.map(todo=>{
		if(!todo.isEditing){
				return (
				<li className="list-group-item clearfix" key={todo.id}>{todo.name}
					<button className="btn btn-success pull-right" onClick={()=>editTodo(todo.id)}>
						Edit
					</button>
					<button className='btn btn-danger pull-right' onClick={()=>deleteTodo(todo.id)}>
						Delete
					</button>
				</li>
			)
		}
		return(
			<li className="list-group-item clearfix" key={todo.id}>
				<input type='text' className='form-control' defaultValue={todo.name} id={`task${todo.id}`}/>
				<button className="btn btn-success pull-right" onClick={()=>cancel(todo.id)}>
					Cancel
				</button>
				<button className='btn btn-danger pull-right' onClick={()=>handleSaveTodo(todo.id)}>
					Save
				</button>
			</li>
		)
	});
	return(
		<ul className='list-group'>
			{List}
		</ul>
	)
}
export default List;