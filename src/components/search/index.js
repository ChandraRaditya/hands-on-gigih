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