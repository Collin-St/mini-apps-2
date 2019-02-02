import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div>
        <h5>hello, world</h5>
        <input type="number" placeholder="Enter number of pins hit" data-role="keypad" data-open="true" data-size-as-keys="false" data-keys="1,2,3,4,5,6,7,8,9,10" autoFocus/>
      </div>
    )
  }
}

export default App;
