import { useState, useEffect, useMemo } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import styles from './user.module.css';
import { UserProfileType } from './type';
import { UserRepoT } from '../../components/UserRepo/type';

import { getUserRepoList } from '../../servises/userRepoServise';
import UserRepo from 'components/UserRepo';

type UserProfileProp = {
  user: UserProfileType;
};

export default function User({ user }: UserProfileProp) {
  // const {query} =  useRouter();
  const [searchrepo, setRepo] = useState<string>('');
  const [userrepo, setRepoList] = useState<UserRepoT[]>([]);
  // console.log('Search', searchrepo);

  useEffect(() => {
    loadRepo();
  }, [user.login]);

  const loadRepo = async () => {
    // try {
    const resRepo = await getUserRepoList(user.login);

    // const res = await fetch('https://api.github.com/users/' + user.login + '/repos');

    // const resRepo = await res.json();
    // console.log(resRepo);

    setRepoList(resRepo);
    // }
    // catch (e) {
    //   setRepoList(e.message);
    // }
  };

  function handleSearchRepo(e: React.ChangeEvent<HTMLInputElement>) {
    const inputRepos = e.target.value;
    setRepo(inputRepos);
  }
  const filtered = useMemo(() => {
    if (!searchrepo.length) {
      return userrepo;
    } else {
      return userrepo.filter((repo) => repo.name.toLowerCase().includes(searchrepo.toLowerCase()));
    }
  }, [searchrepo, userrepo]);

  return (
    <div>
      <div className={styles.user__wrapper}>
        <div className={styles.user_elem__wrap}>
          <div className={styles.user_elem__l}>
            <Image src={user.avatar_url} alt="avatar" width={300} height={300} priority />
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
      <input
        type="text"
        className={styles.searchrepo}
        name="searchrepo"
        onChange={handleSearchRepo}
        value={searchrepo}
      />
      {filtered.map((elem) => {
        return <UserRepo repo={elem} key={elem.id} />;
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async function ({ params }) {
  const res = await fetch(`https://api.github.com/users/${params.id}`);
  const user: UserProfileProp = await res.json();
  return {
    props: { user },
  };
};
