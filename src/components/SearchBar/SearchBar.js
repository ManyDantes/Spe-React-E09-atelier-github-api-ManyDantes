import './searchBar.css';
import searchLogo from './search-solid.svg';

function SearchBar({
  // j'utilise ces deux props comme function pour remonter des datas vers App
  handleInputChange,
  sendRequest,
}) {
  return (
    <div id="container-seaarchBar">
      <input id="searchBar" type="text" placeholder="react" onChange={handleInputChange} />
      <button type="button" id="searchButton" onClick={sendRequest}> <img id="search-img" src={searchLogo} alt="search logo" /> </button>
    </div>
  );
}

export default SearchBar;
