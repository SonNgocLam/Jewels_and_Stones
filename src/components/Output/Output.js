import React, {Component} from 'react';
import './Output.scss';

class Output extends Component {
  render(){
    return (
      <div className="output">
      	<div>
          <p>• Type of jewels: <b>{this.props.typeOfJewel}</b></p>
	      	<p>• Your stones: <b>{this.props.typeOfStones}</b></p>
	      	<p>• NumBer of jewel in your stones: <b>{this.props.jewelsInStones}</b></p>
      	</div>
      </div>
    );
  }
}

export default Output;
