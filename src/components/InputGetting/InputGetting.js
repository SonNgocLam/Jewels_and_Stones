import React, {Component} from 'react';
import './InputGetting.scss';

class InputGetting extends Component {
	constructor(props){
		super(props);
		this.state = {
			txtJewel : '',
			txtStones : '',
			limitText : 50
		};
	}


	onHandleChange = event => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		if(value.length > this.state.limitText){
			this.setState({
				[name] : value.substring(0,this.state.limitText)
			});
		} else {
			this.setState({
				[name] : value
			});
		}
	}

	onHandleSubmit = event => {
		event.preventDefault();
		var numJewelsInStones = 0;
		var jewels = this.state.txtJewel;
		var stones = this.state.txtStones;
		var s = 0;
		var j = 0;

		for(s = 0; s < stones.length; s++){
			for(j = 0; j < jewels.length; j++){
				if(jewels.charAt(j) === stones.charAt(s)){
					numJewelsInStones ++;
					break;
				}
			}
		}
		this.props.onDisplayOutput(jewels, stones, numJewelsInStones);
	}

	onLimitJewels = event => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		var element = document.getElementById('jewelsId');
		var i;

		if(value.length > 1){
			for(i = 0; i < value.length - 1 ; i++){
				if(value.charAt(i) == value.charAt(value.length - 1)){
					alert('You entered the same types of jewels');
					element.value = value.substring(0,value.length - 1);
					break;
				}
			}
		}
		if(value.length > this.state.limitText){
			alert('You entered over allowed types of jewels !');
			element.value = value.substring(0,this.state.limitText);
		}
	}

	onLimitStones = event => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		var element = document.getElementById('stonesId');

		if(value.length > this.state.limitText){
			alert('You entered over allowed stones !');
			element.value = value.substring(0,this.state.limitText);
		}
	}

  render(){
  	
    return (
      <div className="inputGetting">
        <form onSubmit={this.onHandleSubmit}>
        	<div className="form-group">
        		<label><b>Enter types of jewels: </b></label> <br />
        		<input 
        			type="text"
        			name="txtJewel"
        			id="jewelsId"
        			className="getText focusBackground"
        			placeholder="Please input type of jewels here"
        			onKeyUp={this.onLimitJewels}
        			onChange={this.onHandleChange}
        		/>
				<br />
        		<label><b>Enter your stones: </b></label> <br />
        		<input 
        			type="text"
        			name="txtStones"
        			id="stonesId"
        			className="getText focusBackground"
        			placeholder="Please input type of jewels here"
        			onKeyUp={this.onLimitStones}
        			onChange={this.onHandleChange}
        		/>
				<br />
        		<input type="submit" id="btnCheckNow" value="Check Now !"/>
        	</div>
        </form>
      </div>
    );
  }
}

export default InputGetting;
