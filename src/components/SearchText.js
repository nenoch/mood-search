import React from 'react';

class SearchText extends React.Component {
  constructor(props){
    super(props);

    this.handleNewInput = this.handleNewInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewInput(event){
    this.props.onTextInput(event.target.value);
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
