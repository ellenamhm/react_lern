//import { useRouter } from "next/router";
import { useState , useEffect} from 'react';
import styles from '../../styles/user.module.css'
import UserRepo from "../../components/UserRepo";

export default function User({user}){
  // const {query} =  useRouter();
  const [searchrepo, setRepo] = useState('');
  const [userrepo, setRepoList] = useState([]);

  useEffect(() => {
    // console.log(user.login);
    loadRepo();
  }, [user.login]);
  const loadRepo = async () => {
    try {
      const res = await fetch("https://api.github.com/users/" + user.login + "/repos");
      let resRepo = await res.json();
      // console.log('user.login');
      setRepoList(resRepo);

    } catch (e) {
      setRepoList(e.message);
    }
  };

  function handleSearchRepo(e) {
    let inputRepos =  e.target.value;
    setRepo(inputRepos);
  }


  const filtered = userrepo.filter(repo =>repo.name.toLowerCase().includes(searchrepo.toLowerCase()))


  return(
    <div>
      <div className={styles.user__wrapper}>
        <div className={styles.user_elem__wrap}>
          <div className={styles.user_elem__l}>
            <img src={user.avatar_url}/>
            <div>{user.html_url}</div>
          </div>
          <div className={styles.user_elem__r}>
            <div>User name: {user.login}</div>
            <div>Name: {user.name}</div>
            <div>Location: {user.location}</div>
            <div>Followers: {user.followers}</div>
            <div>Following: {user.following}</div>
            <div>Company: {user.company}</div>
            <div>Public repositories: {user.public_repos}</div>
            <div>Public gists: {user.public_gists}</div>
          </div>
        </div>
      </div>
      <input type="text" className={styles.searchrepo}  name="searchrepo"  onChange={handleSearchRepo}  value={searchrepo} />
      { filtered.map((elem)=> {
        // console.log(elem);
             return <UserRepo  repo = {elem}  key={elem.id}/>
            })
          } 
    </div>

  ) 
}

export async function  getServerSideProps({params}) {
  const res = await fetch(`https://api.github.com/users/${params.id}`)
  const user = await res.json()
  return  {
    props:{user},
  }
}