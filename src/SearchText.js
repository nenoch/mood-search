import React from 'react';

class SearchText extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Text</label>
          <input type="input" name="user-input" value="" />
          <button type="submit">Analyse!</button>
        </form>
      </div>
    );
  }
}

export default SearchText;
