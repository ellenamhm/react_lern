import UserItem from "./UserItem";

function UserList({users, usertitle, props}){
  // console.log({login, id , avatar_url , ...props});
  return (
    <div>
        <div className="users__wrapper">     
        <div className="users__title">{usertitle}</div>
        <div className="users__list">
          { users.map((elem)=> {
             return <UserItem  user = {elem}  key={elem.id}/>
            })
          } 
        </div>
      </div>
    </div> 
  )
}
export default UserList