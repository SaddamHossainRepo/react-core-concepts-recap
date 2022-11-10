import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nayok name={nayoks[0].name} age={nayoks[0].age}></Nayok>
      <Nayok name={nayoks[1].name} age={nayoks[1].age}></Nayok>
      <Nayok name={nayoks[2].name} age={nayoks[2].age}></Nayok>
      <Nayok></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

const nayoks = [
  {name: 'Sakib khan', age: 40},
  {name: 'hero alom', age: 30},
  {name: 'ajanta jalil', age: 42},
  {name: 'salman shah', age: 50}
]

function Nayok(props){
  console.log(props.name)
  const nayokStyle={border:'2px solid yellow', margin: '10px', backgroundColor:'silver'};
  return (
    <div style={nayokStyle}>
      <h1>Ami nayok: {props.name}, I am {props.age} years old!!! </h1>
      <p>I have done 5 movies</p>
    </div>
  )
}

export default App;
