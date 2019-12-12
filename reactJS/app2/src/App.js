import React, {Component} from 'react';
import './App.css';
import Modal from './Component/Modal/Modal.js';



class App extends Component {
  state = {
    show:false,

    projects:[
      {id:'one',name:'Project One',description:'This is my First Project',image:'../Component/image/portfolio minyue wang_Page_02.jpg',url:''},
      {id:'two',name:'Project Two',description:'This is my Second Project',image:'../Component/image/portfolio minyue wang_Page_10.jpg',url:''},
      {id:'three',name:'Project Three',description:'This is my Third Project',image:'../Component/image/portfolio minyue wang_Page_16.jpg',url:''},
      {id:'four',name:'Project Four',description:'This is my Fourth Project',image:'../Component/image/portfolio minyue wang_Page_24.jpg',url:''},
      {id:'five',name:'Project Five',description:'This is my Fifth Project',image:'../Component/image/portfolio minyue wang_Page_31.jpg',url:''}
    ]
  };

  showModal = () =>{
    this.setState({
      show: !this.state.show
    });
  };

  render(){

    const items = this.state.projects.map(

      (data)=> 
      // => is arrow
        <div>
          <h2>{data.name}</h2>
          <h4>{data.description}</h4>
          <p>  
            <div> <a href={data.url} target="blank">
              <img alt={data.image} src={data.image}/>Slide 1</a></div>  
          </p>

        </div>

    
    );

    return (
      <div className="App">
      <h1>This is my portfolio</h1>

      {/* <h2>{this.state.projects[1].name}</h2> Not a good way if have too many components*/}

      {/* <h2>{this.state.projects.math.random[].name}</h2> this is the code for calling random*/}



      <button onClick = {()=>{this.showModal();}}>projects</button>
      {items}
      <Modal onClose = {this.showModal} show = {this.state.show}>This is my main projects</Modal>
      </div>
    );
  }

}


export default App;
