import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';



class  App extends Component  {
	constructor (){
		super()
		this.state = {
			robots: [],
			searchfield: ''
			}
		}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => [this.setState({ robots: users})]);

	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
		
	}
	render(){
        const filterRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	 if(!this.state.robots.length){
	 	return <h1>Loading</h1>
	 }  else {
		return (
					<div className = 'tc' >
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
					   		<Cardlist robots = {filterRobots}/>
						</ErrorBoundary>
					</Scroll>
					</div>
				);
			}
	}

}

export default App;