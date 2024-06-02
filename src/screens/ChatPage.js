

let ChatPage = ()=>{
    return <main className="container">
    <TopBar props = "username"/>
    </main>
}


export default ChatPage;


let TopBar = ({props})=>{
    return <div className="topBar">
        <h1> {props}</h1>
        <hr />
    </div>
}

let messageArea = ()=>{

}

let message = ()=>{
    return <>
    
    </>
}