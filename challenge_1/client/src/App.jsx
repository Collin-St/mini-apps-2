import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import OutputList from './OutputList.jsx';


class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      output: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  getJSON() {
    fetch(`/events?q=${this.state.query}&_limit=10`)
    .then(results => {
      // console.log("results", results)
      return results.json();
    })
    .then(data => {
      // console.log(data)
      this.setState({
        output: data
      })
    })
    .catch(err => {
      console.log("Fetch error: ", err)
    })
  }

  handleChange(e) {
    // e.preventDefault()
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({
    //   query: e.target.value
    // })
    return (this.state.query.length) ? this.getJSON() : null;
    // return this.getJSON()
  }

  render() {
    return (
      <div>
        <form align='center'>
          <input type='text' onChange={this.handleChange} placeholder="Enter search query here" autoFocus />
          <input className='submit' type='submit' onClick={this.handleSubmit} />
        </form>
        {(this.state.output.length) ? <OutputList output={this.state.output} /> : null}
      </div>
    )
  }
}


export default App;
