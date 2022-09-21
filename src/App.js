import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}



// create component
/* function LoadCountries(){
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])

  return(
    <div>
      <h1>Visiting Every Countriy of the World!!!</h1>
      <h5>Available countries: {countries.length}</h5>
      {
        countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}


// country component
function Country(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h5>Population: {props.population}</h5>
    </div>
  )
} */

export default App;
