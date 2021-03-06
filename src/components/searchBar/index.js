import "./index.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function SearchBar(props) {
  return (
    <form
      onSubmit={(event) => {
        props.handelButton(event);
      }}
    >
      <div>
        {/* <input id="search-text" type='text' onChange={props.handelSearchInput} /> */}
        <TextField
          id="standard-search"
          data-testid="search-text"
          type="search"
          variant="standard"
          placeholder="search here"
          onChange={props.handelSearchInput}
        />
        {/* <input type="submit" value="Submit" id="submitButton" /> */}
        <Button variant="contained" type="submit" aria-pressed="true">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default SearchBar;

// import React from 'react';

// class Search extends React.Component {
//     // Write the constructor below
//     constructor(props) {
//         super(props);
//         this.state = { datas: [] };
//     }

//     handelSearchImage(event) {
//         const inputValue = event.target.value;

//         const getData = async () => {
//             const datas = await fetch(
//                 `http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=E5GSyW5D7GHlLqU7Erm3ZmTqYuYTWUzX&limit=5`
//             ).then(response => response.json())
//             this.setState({ datas })
//         }
//     }

//     render() {
//         return (
//             <form onSubmit={() => { this.handelSearchImage() }}>
//                 <div>
//                     <input></input>
//                     <button className='form-button'>submit</button>
//                 </div>
//             </form>
//         );
//     }
// }

// export default Search;
