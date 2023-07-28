import style from './UserRepo.module.css';
import { UserRepoType } from './type';

function UserRepo({ repo }: UserRepoType) {
  return (
    <div>
      <div className={style.element__Repo}>
        {/* <div>{props.repo.id}</div> */}
        <div className={style.repo_elem__l}>
          <div>{repo.name}</div>
        </div>
        <div className={style.repo_elem__r}>
          <div>{repo.stargazers_count}</div>
          <div>{repo.forks_count}</div>
        </div>
      </div>
    </div>
  );
}
export default UserRepo;
