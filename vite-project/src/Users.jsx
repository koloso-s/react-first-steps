
function Users (){
    const names = ['James','Nicolas','Mike','Johny'];
    return(
        <div className="users">
        <h1>Hello Users!</h1>
            {names.map((name)=> (
              <h3 key={name}>Hello {name}</h3>
            ))}
        </div>
    )
}

export default Users