import style from './UserItem.module.css';
import Link from 'next/link';
import { UserItemProp } from './type';

function UserItem({ user }: UserItemProp) {
  return (
    <div className={style.element__User}>
      <Link href={`/users/${user.login}`} key={user.id}>
        {user.login}
      </Link>
      <div>{user.avatar_url}</div>
    </div>
  );
}
export default UserItem;
