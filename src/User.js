import './App.css'

function User(p){
    console.log(p)
    
    return (
    <div>
    <h1 className='bg-primary text-white'>{p.user.name}</h1>
    <p>{p.user.gender}</p>
    <p>{p.user.age}</p>
    </div>
    )
}
export default User
