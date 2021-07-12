// import { render } from '@testing-library/react';
import React,{Component} from 'react';
import CardList from '../Components/CardList.js'
// import {robots} from'./robots';
import SearchBox from '../Components/SearchBox.js';
import '../Containers/App.css';
import Scroll from '../Components/Scroll.js';
import ErrorBoundary from '../ErrorBoundary.js';

class App extends React.Component {
 constructor(){
     super()
     this.state={
        robots:[],
        searchfield:''
     }
 }  

 componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=> response.json())
     .then(users=>this.setState({robots:users}));
     console.log('check')
 }

onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
    console.log(event.target.value);
}
 
    render(){
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return(
        <div className='tc'>
            <h1 className='f1'>ROBOFRIENDS</h1>
            <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
            <ErrorBoundary>
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        
        </div>
    );   
    } 
}
export default App;