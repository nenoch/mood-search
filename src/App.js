import React from 'react';
import SearchText from './SearchText';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      text: ""
    }

    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(newText){
    this.setState({ text: newText });
  }

  render(){
    return (
      <div className='app'>
        <h1>Mood Search!</h1>
        <h3>Type in some text and find out how you feel today.</h3>
        <SearchText text={this.state.text} onTextInput={this.handleTextInput}/>
      </div>
    );
  }
}

export default App;
