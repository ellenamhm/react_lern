import Link from "next/link"

function UserItem( props){
  return (
    <div>
      <div className="element__User">
        <Link href={`/users/${props.user.login}`} key={props.user.id}>{props.user.login}
        </Link>
        <div>{props.user.avatar_url}</div>
        {/* <div>{props.user.login} {props.user.avatar_url}</div> */}
      </div>
    </div> 
  )
}
export default UserItem