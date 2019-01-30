import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import List from './List.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      data: [],
      pageCount: 0,
      page: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {}

  getData() {
    axios.get(`/events?_page=${this.state.page}&q=${this.state.query}`)
    .then(results => {
      this.setState({
        data: results.data,
        pageCount: Math.ceil(results.headers['x-total-count'] / 10)
      })
    })
    .catch(err => {
      console.log("Fetch error: ", err)
    })
  };

  handleChange(e) {
    this.setState({
      query: e.target.value
    }, () => { (this.state.query.length) ? this.getData() : 
      this.setState({ 
        data: [] 
      }) 
    })
  };

  handlePageClick(data) {
    let selected = data.selected + 1;
    console.log("page selected: ", selected)
    
    this.setState({
      page: selected
    }, () => {
      this.getData()
    })
    
  };

  render() {
    return (
      <div>
        <form align='center'>
          <input type='text' onChange={this.handleChange} placeholder="Enter search query here" autoFocus />
        </form>
        {(this.state.data.length) ? 
        <div>
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={this.state.pageCount}
        marginPagesDisplayed={0}
        pageRangeDisplayed={(this.state.pageCount < 100) ? (this.state.pageCount / 10) : 9}
        onPageChange={this.handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'} /> 
        <List data={this.state.data} /> 
        </div> : null}
      </div>
    )
  }
}

export default App;
