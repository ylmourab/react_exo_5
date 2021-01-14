import logo from './logo.svg';
import './App.css';
import Profil from './components/Profil';

function App() {
  return (
    <div className="App">
      <Profil nom="Primo" prenom="Nicolas">description de Nicolas</Profil>
      <Profil nom="Turkish" prenom="kadir">description de Kadir</Profil>
      <Profil nom="Albert" prenom="hacker">description de albert</Profil>
      <Profil nom="Oussari" prenom="Ibrahim"></Profil>
     
    </div>
  );
}

export default App;
