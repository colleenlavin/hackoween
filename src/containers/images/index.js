import React, {Component} from 'react'
import './style.css';
import Header from '../header'

export default class Image extends React.Component {
   constructor() {
       super();
       this.state = { items: [] };
   }
   
   componentDidMount() {
       fetch(``) 
           .then(result=> {
               this.setState({items:result.json()});
           });
   }
   
   render() {        
       return(
           <div>
               <div>Items:</div>
               { this.state.items.map(item=> { return <div>{}</div>}) }          
           </div>  
       );
   }
}

