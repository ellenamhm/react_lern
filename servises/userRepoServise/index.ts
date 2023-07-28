import { UserRepoT } from '../../components/UserRepo/type';

export const getUserRepoList = async (userlogin: string): Promise<UserRepoT[]> => {
  const res = await fetch('https://api.github.com/users/' + userlogin + '/repos');
  const resRepo: UserRepoT[] = await res.json();
  return resRepo;
};
