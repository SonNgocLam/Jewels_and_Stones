import React, {Component} from 'react';
import './Subject.scss';

class Subject extends Component {
  render(){
    return (
      <div className="subject">
      	<div>
      		<p> 
      			You're given strings J representing the types of stones that are jewels, and S representing the stones you have. 
	        	Each character in S is a type of stone you have. 
	        	You want to know how many of the stones you have are also jewels.
				The letters in J are guaranteed distinct, and all characters in J and S are letters.
				Letters are case sensitive, so "a" is considered a different type of stone from "A".
			</p>
			<div className="example">
				<div>
					<b>Example 1:</b> <br />
					Input: J = "aA", S = "aAAbbbb" <br />
					Output: 3
				</div>
				<div>
					<b>Example 2:</b> <br />
						Input: J = "z", S = "ZZ" <br />
						Output: 0 <br />
				</div>
			</div>
			<p>	
				<b>Note:</b> <br />
				• S and J will consist of letters and have length at most 50. <br />
				• The characters in J are distinct.
			</p>
      	</div>
      </div>
    );
  }
}

export default Subject;
