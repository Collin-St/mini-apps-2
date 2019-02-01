import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
          datasets: []
        }
      }
    }
  
  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05`)
    .then(response => {
      this.setState({
        data: {
          labels: Object.keys(response.data.bpi),
          datasets: 
          [
            {
              label: 'Bitcoin in USD',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHitRadius: 25,
              data: Object.values(response.data.bpi)
            }
          ]
        }
      })
    })
    .catch(err => console.log('GET error: ', err));
  }

  render() {
    return (
      <div>
        <Line data={this.state.data} />
        <h5 align="center">Powered By <a href="https://www.coindesk.com/price/">CoinDesk</a></h5>
      </div>
    )
  }
}

export default App;
