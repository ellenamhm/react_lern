import { useState } from 'react';
import Search from "components/Search";
import UserList from "components/UserList";
// import useDebounce from "../hooks/useDebounce";
// import React, { useState, useEffect } from 'react';


export default function Home() {


  const [uservalue, setUsersList] = useState([]);
  // const [searchvalue, setUsersValue] = useState('');
  // const debouncedSearch = useDebounce(createPosts, 500)

  async function createPosts(url_path = ''){
    try{
      const res = await fetch("https://api.github.com/search/users?q="+ url_path +"");
      let resUsers = await res.json();
      console.log(resUsers.items)

      if (!Array.isArray(resUsers.items)) throw Error('Response from server is not array') 
      
      setUsersList(resUsers.items);
    } catch (e){
      setUsersList([]);
      console.log("error", e.message)
    }
  };


  // function handleSearch(e) {
  //   let searchUsers =  e.target.value;
  //   setUsersValue(searchUsers);
  //   debouncedSearch(searchUsers);
  // }
  



  return (
    <div className="wrapper">
      <div className="header">header</div>

        <main className='main'><div  className=" search-title">GitHub Searcher</div>  
          {/* <input type="text" className='search-user'  name="searchfield"  onChange={handleSearch}  value={searchvalue} /> */}
          <Search  create ={createPosts} />
          {/* {console.log(uservalue.length)} */}
          {uservalue.length > 0 
            ?  <UserList users = {uservalue}  usertitle = 'Users list' />
            : 'not found'
          }
        </main>

        <footer className="footer">footer</footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: normal;
          align-content: normal;
          min-height: 100vh;
          color: #000;
        }
        .main{
          flex-grow: 1;
          flex-shrink: 1;
        }
        .search-title{
          padding: 50px;
          text-align: center;
          color: #000;
          font-size: 22px;
          font-weight: 700;
        }

        .header,
        .footer{
          background-color: brown;
          padding: 20px;
          text-align: center;
          color: #000;
          font-size: 18px;
          font-weight: 700;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
