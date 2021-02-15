
import './App.css';
import React, { Component } from 'react';
import Allstates from './Components/allstates/allstates';

import Donut from './Components/charts/Donut/donut';
import Map from './Components/Map/map';
import Boxes from './Components/Boxes/boxes';

class  App extends Component {

  state={
    covidstates:[],
    alldata:{}
  }

componentDidMount(){
  fetch('https://api.covid19india.org/data.json').then(Response=>Response.json())
  .then(res=>{
    let arr=[];
    arr=res.statewise;
    this.setState({covidstates:arr});
   
  }).catch(err=>{
    console.log(err);
  })
}



assign(current){
  this.setState({alldata:current});

}



  render(){

    

  return (
    <div className="App">
      

    
      <div className="container">

      <div className='first'>
      <div className="three">
      <Donut  alldata={this.state.alldata}  chartstates={this.state.covidstates} />
      </div>
      
      <Allstates  statearray={this.state.covidstates}/>
      </div>
    
      <div className="second">
        <Boxes alldata={this.state.alldata} boxstates={this.state.covidstates}  />
      <Map  className ="map"  onassign={(data)=>this.assign(data)}  mapstates={this.state.covidstates}/>
    </div>
    
      </div>


     
    </div>
  );
}
}

export default App;
