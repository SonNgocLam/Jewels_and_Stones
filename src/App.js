import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Subject from './components/Subject/Subject';
import InputGetting from './components/InputGetting/InputGetting';
import Output from './components/Output/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      typeOfJewel : '',
      typeOfStones : '',
      jewelsInStones : 0
    };
  }

  onChangeOutput = (jewel, stone, num) => {
    this.setState({
      typeOfJewel : jewel,
      typeOfStones : stone,
      jewelsInStones : num
    });
  }

  render(){

    return (
      <div className="App">
        <Header />
        <Subject />

        <div className="resultSubject">
            <h3>Let's start now !</h3>
        </div>
        <div className="result">
          <InputGetting 
            onDisplayOutput={this.onChangeOutput}
          />
          <Output 
            typeOfJewel={this.state.typeOfJewel}
            typeOfStones={this.state.typeOfStones}
            jewelsInStones={this.state.jewelsInStones}   
          />
        </div>
      </div>
    );
  }
}

export default App;
