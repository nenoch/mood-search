import React from 'react';
import style from '../../css/main.css';

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
      <div className={style.search_text}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="input" className="form-control"
            placeholder="Type your sentence here..."
            value={this.props.text}
            onChange={this.handleNewInput} />
          </div>
          <button type="submit" className="btn btn-info">Analyse!</button>
        </form>
      </div>
    );
  }
}

export default SearchText;
