import React,{Component} from 'react';
import AddTodo from './AddTodo';
import Nav from './Nav';
import List from './List';
class App extends Component{
	constructor(){
		super();
		this.state={todos:[]};
	}
	addTodo(todo){
		this.setState({todos : [...this.state.todos,todo]});
	}
	deleteTodo(id){
		const todos=this.state.todos.filter((value)=>{
			return value.id != id ; 
		});
		this.setState({todos});
	}
	modify(id,payload){
		const todoState=this.state.todos;
		for(var key in todoState){
			if(todoState[key].id==id){
				todoState.splice(key,1,Object.assign(todoState[key],payload));
				return this.setState({todos:todoState});
			}
		}
	}
	editTodo(id){
		this.modify(id,{isEditing:true});
	}
	saveTodo(id,payload){
		this.modify(id,payload);
	}
	cancel(id){
		this.modify(id,{isEditing:false});
	}
	render(){
		return(
			<div>
				<Nav/>
				<div className="col-md-6 col-md-offset-3">
					<AddTodo 
						addTodo={this.addTodo.bind(this)} 
						
						/>
					<br/>
					<List 
						todos={this.state.todos} 
						deleteTodo={this.deleteTodo.bind(this)}
						editTodo={this.editTodo.bind(this)}
						saveTodo={this.saveTodo.bind(this)}
						cancel={this.cancel.bind(this)}
					/>
				</div>
			</div>
		);
	}
}
export default App;
