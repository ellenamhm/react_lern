import style from './UserList.module.css';
import UserItem from '../UserItem';
import { UserListType } from './type';

function UserList({ users, usertitle }: UserListType) {
  return (
    <div>
      <div className={style.users__wrapper}>
        <div className={style.users__title}>{usertitle}</div>
        <div className={style.users__list}>
          {users.map((elem) => {
            return <UserItem user={elem} key={elem.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default UserList;
