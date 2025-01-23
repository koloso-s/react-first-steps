
function Data (){
    const myData = {
        'name':'Krystian',
        'age':18,
        'school':'ZST Rzeszów'
      }
    return(
        <div className="myData">
        <h1>Information about me</h1>
        <p>My name: <b>{myData.name}</b></p>
        <p>My age: <b>{myData.age}</b></p>
        <p>My school: <b>{myData.school}</b></p>
      </div>
    )
}

export default Data