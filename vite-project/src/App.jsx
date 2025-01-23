import "./style.css"

function App() {
  const names = ['James','Nicolas','Mike','Johny'];
  const myData = {
    'name':'Krystian',
    'age':18,
    'school':'ZST Rzeszów'
  }
  return (
    <div className="container">
      <div className="users">
      <h1>Hello Users!</h1>
          {names.map((name)=> (
            <h3 key={name}>Hello {name}</h3>
          ))}
      </div>
      <div className="myData">
        <h1>Information about me</h1>
        <p>My name: <b>{myData.name}</b></p>
        <p>My age: <b>{myData.age}</b></p>
        <p>My school: <b>{myData.school}</b></p>
      </div>
    </div>
)
}

export default App
