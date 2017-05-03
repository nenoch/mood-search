import React from 'react';

class SearchText extends React.Component {
  constructor(props){
    super(props);

    this.handleNewInput = this.handleNewInput.bind(this);
  }

  handleNewInput(event){
    this.props.onTextInput(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input type="input"
          placeholder="Type your sentence here..."
          value={this.props.text}
          onChange={this.handleNewInput} />
          <button type="submit">Analyse!</button>
        </form>
      </div>
    );
  }
}

export default SearchText;
