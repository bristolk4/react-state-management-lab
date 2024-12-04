import {useState} from 'react'
import ZombieFighterItem from "./components/ZombieFighterItem/ZombieFighterItem.jsx";
import './App.css'

const App = () => {
const [team, setTeam] = useState([])
const handleAddFighter = (zombieFighterId) => {console.log("add fighter", zombieFighterId)}
const [money, setMoney] = useState(100)
const [zombieFighters, setZombieFighters] = useState([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
    id: 1
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
    id: 2
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
    id: 3
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
    id: 4
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
    id: 5
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
    id: 6
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
    id: 7
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
    id: 8
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
    id: 9
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
    id: 10
  },
]);

  return (
    <>
      <h1>Fighters</h1>
        <ul>
          {zombieFighters.map((zombieFighter) => (
          <ZombieFighterItem key={zombieFighter.id} zombieFighter={zombieFighter}
          handleAddFighter = {handleAddFighter} />
          ))}
          {/* I don't know what to do anymore and I'm giving up */}
        </ul>
      <h1>Money</h1>
        <ul>
          ${money}
        </ul>
    </>
  );
}

export default App