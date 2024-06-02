import {useState} from 'react'


let Home = () => {
    return <main className='HomePage'>
      <TopBar />
      <NotesContainer />
      <Search />
      <UsersContainer />
    </main>
}

export default Home;




class note{
    constructor(username, note){
        this.username = username
        this.note = note
    }
}

class userClass{
    constructor(username, bio){
        this.username = username
        this.bio = bio
    }
}
function loadNotes(){
    return [ 
        new note("anand", "you'll get what u deserve"),
        new note("spider-man", "with great power comes great resp with great power comes great resp with great power comes great resp"),
        new note("tony start", "im iron man"),
        new note("steve roger", "i can do this all day"),
        new note("hulk", "smash")
    ]
}

function loadUsers(){
    return [ 
        new userClass("anand", "you'll get what u deserve"),
        new userClass("spider-man", "with great power comes great resp"),
        new userClass("tony start", "im iron man"),
        new userClass("steve roger", "i can do this all day"),
        new userClass("hulk", "smash"),
        new userClass("anand", "you'll get what u deserve"),
        new userClass("spider-man", "with great power comes great resp"),
        new userClass("tony start", "im iron man"),
        new userClass("steve roger", "i can do this all day"),
        new userClass("hulk", "smash"),
        new userClass("anand", "you'll get what u deserve"),
        new userClass("spider-man", "with great power comes great resp"),
        new userClass("tony start", "im iron man"),
        new userClass("steve roger", "i can do this all day"),
        new userClass("hulk", "smash")
    ]
}

let TopBar = () =>{
return <div className='homePageTopBar'>
    <h1> diffuse </h1>
    <hr/>
    </div>
}

let NotesContainer = () => {
    let posts = loadNotes()  
    return <div class= "notesContainer">
        { posts.map( (item) => <Note props={item} />) }
    </div>
}

let Note = ({props}) =>{
    return <>
    <section class = "note">
        <h4> {props.username}</h4>
        <p> {props.note}</p>
    </section>
    </>
}


let Search = () =>{
    const [search, oninp] = useState("")
    function handleChange(e){
        oninp(e.target.value)
    }
    return <div className='searchContainer'>
    <input type='text' id = "searchBar" value={search} onChange={handleChange} placeholder='search user' />
    <input type='submit' id = "submit" value="find" />
    </div>
}

let UsersContainer = () =>{
    let users = loadUsers()
    return <div className='usersContainer'>
        {users.map( (user) => <User props = {user} />  )}
    </div>
}
let User = ({props}) =>{
    return <section className='user'>
        <div className='profilepic'></div>
        <h4>{props.username}</h4>
        <p>{props.bio}</p>
        
    </section>
}


