import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [

      ]

    }

  }

  onSearch (term) {
    // console.log(`${term} was searched`);
   $.post({
    type: "POST",
    url: 'http://localhost:1128/repos',
    data: {search: term},
    success: function(data) {
      return data;
    }
   })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.onSearch.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));