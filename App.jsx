import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {
	//allows robots to communicate with search
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: '' 
		}
	}



	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users=>this.setState({robots: users}))

	}



	//search function
	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})

	}


	//renders the frontend
	render(){
		const filteredRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if(this.state.robots.length === 0){
			return <h1>Loading</h1>
		}
		else{
			return(
			<div className='tc'>
				<h1>Robofreinds</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
			);
		}


	}
}

export default App;