import stylerepo from '../styles/UserRepo.module.css';

function UserRepo( props){
  return (
    <div>
      <div className={stylerepo.element__Repo}>
        {/* <div>{props.repo.id}</div> */}
        <div className={stylerepo.repo_elem__l}>
         <div>{props.repo.name}</div>
        </div>
        <div className={stylerepo.repo_elem__r}>
            <div>{props.repo.stargazers_count}</div>
            <div>{props.repo.forks_count}</div>
        </div>
      </div>
    </div> 
  )
}
export default UserRepo