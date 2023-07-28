import { useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import style from './Search.module.css';
import { SearchElem } from './type';

export default function Search({ searchusers }: SearchElem) {
  const [searchvalue, setUsersValue] = useState('');
  const debouncedSearch = useDebounce(searchusers, 500);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchUsers = e.target.value;
    setUsersValue(searchUsers);
    debouncedSearch(searchUsers);
  }

  return (
    <div>
      <input type="text" className={style.search_user} name="searchfield" onChange={handleSearch} value={searchvalue} />
    </div>
  );
}
