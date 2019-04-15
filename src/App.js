import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input1: '0',
      output: '',
      btns: ['AC', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '.', '='],
      opration:'',
      input2:''
    }
  }

  handleClick = (e) =>{
    let id='';
    if(e.target.id === 'zero'){
      id= '0';
    }
    else{
     id = e.target.id;
    }
    if(id !== 'clear' && id !== '/' && id !== '*' && id !== '+' && id !== '-' && id !== 'equal' ){
      if(this.state.opration === ''){
      if(this.state.input1 !== '0'){
      this.setState({
        input1: this.state.input1 + id,
        output: this.state.output + id
      })
    }
    else{
      if(id === '0'){
        this.setState({
          input1:'0',
          output: ''
        })
      }
      this.setState({
        input1:id,
        output:id
      })
    }
  }
  else{
    if(this.state.input2 !== ''){
      this.setState({
        input2: this.state.input2 + id,
        output: this.state.output + id
      })
    }
    else{
      this.setState({
        input2:id,
        output:id
      })
    }
  }
  }
    else{
      this.setState({
        operation: id
      })
      switch(id){
        case 'clear':
        {
          this.setState({
            input1:'0',
            output:'',
            input2:'',
            operation:''
          })
          break;
        }
        // case '/':
        //  {
        //    this.setState({
        //      opration:id,
        //      output:''
        //    })
        //    break;
        //  }
        //  case '*':
        //  {
        //    this.setState({
        //      opration:id,
        //      output:''
        //    })
        //    break;
        //  }

        //  case '+':
        //  {
        //    this.setState({
        //      opration:id,
        //      output:''
        //    })
        //    break;
        //  }
        //  case '-':
        //  {
        //    this.setState({
        //      opration:id,
        //      output:''
        //    })
        //    break;
        //  }
         case 'equal':
         {
           const in1 = parseInt(this.state.input1); 
           const in2 = parseInt(this.state.input2 === '' && this.state.opration === '' ? 0 : this.state.input2); 
           const op = this.state.operation;
           switch(op){
             case '+':{
               this.setState({
                 output: in1+in2
               })
               break;
             }
             case '-':{
              this.setState({
                output: in1-in2
              })
              break;
            }
            case '*':{
              this.setState({
                output: in1*in2
              })
              break;
            }
            case '/':{
              this.setState({
                output: in1/in2
              })
              break;
            }
            
           }

           this.setState({
             input1:'0',
             input2:'',
             operation:''

           })
           break;
         }
         default:
            {
           this.setState({
             opration:id,
             output:''
           })
      }
    }
  }
}
  render() {
    let id = '';
    return (
      <div className='App'>
        <div className='Calculator'>
          <div className='displayScreen'>{this.state.output}</div>
          <div className='display'>{this.state.opration ? this.state.input2 : this.state.input1}
          </div>
          <div>
            {this.state.btns.map(item => {
              if (item === '0') { id = 'zero' }
              else if (item === 'AC') { id = 'clear' }
              else if (item === '=') { id = 'equal' }
              else {
                id = item
              }
              return (
              <button id={id} className='Button' onClick={(e)=>this.handleClick(e)}>{item}</button>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
