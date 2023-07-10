import { useState } from 'react';
import useDebounce from "hooks/useDebounce";


export default function Search({create, ...props}) {
  const [searchvalue, setUsersValue] = useState('');
  const debouncedSearch = useDebounce(create, 500)

  // const [uservalue, setUsersValue] = useState('');

  function handleSearch(e) {
    let searchUsers =  e.target.value;
    setUsersValue(searchUsers);
    // create(searchUsers);
    debouncedSearch(searchUsers);
  }

  return (
    <div>
        <input type="text" className='search-user'  name="searchfield"  onChange={handleSearch}  value={searchvalue} />
      {/* <button onClick={handleClick}>Like ({likes})</button> */}
      <style jsx>{`
        .input-search__wrap{
          padding: 0px 20px 50px 20px;
          text-align: center;
          width:  700px;
          max-width: 100%;
          margin: 0 auto;
        }
        .search-user{
          height: 60px;
          width: 100%;
          padding: 5px 30px;
          border: 2px solid #000;
          color: #000;
        }
      `}</style>
    </div>
  );
}