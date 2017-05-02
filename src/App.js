import React from 'react';
import SearchText from './SearchText';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>Mood Search!</h1>
        <h3>Type in some text and find out how you feel today.</h3>
        <SearchText />
      </div>
    );
  }
}

export default App;
