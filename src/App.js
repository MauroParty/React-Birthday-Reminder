import React from "react";
import './App.css';

import List from "./components/List";
import data from "./components/data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }

    this.clearAll = this.clearAll.bind(this);
  }

  clearAll() {
    this.setState({
      data: []
    })
  }

  render() {
    return(
      <main>
        <List
          data = {this.state.data}
          clearAll = {this.clearAll}
        />
      </main>
    )
  }
}

export default App;