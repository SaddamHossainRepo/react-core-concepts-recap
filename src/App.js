import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  }, [])


  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.email}></Nayok> )
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

// const nayoks = [
//   {name: 'Sakib khan', age: 40},
//   {name: 'hero alom'},
//   {name: 'ajanta jalil', age: 42},
//   {name: 'salman shah', age: 50}
// ]

function Nayok(props){
  // console.log(props)
  const nayokStyle={border:'2px solid yellow', margin: '10px', backgroundColor:'silver'};
  return (
    <div style={nayokStyle}>
      <h1>Ami nayok: {props.name}, I am {props.age || 25} years old!!! </h1>
      <p>I have done 5 movies</p>
    </div>
  )
}



function MovieCounter(){
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count+1);

  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count+10}></MovieDisplay>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return (
    <div>
      <h4>Movies I have acted: {props.movies}</h4>
    </div>
  )
}

export default App;
