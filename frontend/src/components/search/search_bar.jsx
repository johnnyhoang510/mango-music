import React from "react";

const SearchBar = (props) => {
  console.log(props);

  // handle input
  // handle changes
  // window.search({q: "Dancing Queen", type: "track"}).then(res => console.log(res.data.tracks.items));

  // const searchData = {
  //   q: "",
  //   type: "track",
  //   limit: 15
  // };

  // const searchShow = "";




  // const displaySong = e => {
  //   e.preventDefault();

  // }
 
  

  return (
    <div className="header__search-wrapper">
      <input 
        className="header__search-input" 
        placeholder="Search for a track"
        // onChange={e => searchData.q = (e.target.value)}
      ></input>
      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" /></svg>
    </div>
    //  if (this.state.searchWord !== '') {
    // searchList = (
    //   <div className="search-drop-down">
    //     <div className="square" style={{ width: "15px", height: "15px", backgroundColor: "#ffffff", position: "absolute", top: "-8px", right: "175px", zIndex: "0", transform: "rotateZ(45deg)", boxShadow: "-2px -2px 2px 0px rgba(0 0 0 / 10%)" }} />
    //     <div className='search-box-wrapper'>
    //       {searchItem}
    //     </div>
    //   </div>
    // )
    //         searchClear = (
    //   <div className="search-clear" onClick={() => this.setState({ searchWord: '' })}></div>
    // )
// }
    // display results onclick open modal
  );
}

export default SearchBar;

