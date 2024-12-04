import {useState} from 'react'
import ZombieFighterItem from "./components/ZombieFighterItem/ZombieFighterItem.jsx";
import './App.css'

const App = () => {
const [team, setTeam] = useState([])
const [totalStrength, setTotalStrength] = useState(0)
const [totalAgility, setTotalAgility] = useState(0)
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
const handleAddFighter = (zombieFighter) => {
    if (zombieFighter.price <= money) {
      const newTeam = [...team, zombieFighter];
      const newTotalStrength = (totalStrength + zombieFighter.strength)
      const newTotalAgility = (totalAgility + zombieFighter.agility)
      const newMoney = (money - zombieFighter.price)
      setTeam(newTeam);
      setTotalStrength(newTotalStrength);
      setTotalAgility(newTotalAgility);
      setMoney(newMoney);
    } else {
      console.log("Ya poor!!")
    }
}
const handleRemoveFighter = (zombieFighter) => {
    const fighterIndex = team.indexOf(zombieFighter)
    const filterFunction = (_, index) => {index !== fighterIndex}
    const newTeam = team.filter(filterFunction)
    const newTotalStrength = (totalStrength - zombieFighter.strength)
    const newTotalAgility = (totalAgility - zombieFighter.agility)
    const newMoney = (money + zombieFighter.price)
    setTeam(newTeam)
    setTotalStrength(newTotalStrength);
    setTotalAgility(newTotalAgility);
    setMoney(newMoney);
}

  return (
    <>
      <h1>Fighters</h1>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <li>
                <h3>Name: {zombieFighter.name}</h3>
                <p>Price: ${zombieFighter.price}</p>
                <p>Strength: {zombieFighter.strength}</p>
                <p>Agility: {zombieFighter.agility}</p>
                <img src={zombieFighter.img} />
                <button onClick={() => handleAddFighter(zombieFighter)}>Add to Team</button>
            </li> 
          ))}
        </ul>
      <h1>Team</h1>
      <ul>
        {team.length > 0 ? '' : 'Choose a fighter.' }
        {team.map((zombieFighter) => (
          <li>
              <h3>Name: {zombieFighter.name}</h3>
              <p>Price: ${zombieFighter.price}</p>
              <p>Strength: {zombieFighter.strength}</p>
              <p>Agility: {zombieFighter.agility}</p>
              <img src={zombieFighter.img} />
              <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove from Team</button>
          </li> 
        ))}
      </ul>
      <h2>Total Strength</h2>
      <p>{totalStrength}</p>
      <h2>Total Agility</h2>
      <p>{totalAgility}</p>
      <h1>Money</h1>
        <ul>
          ${money}
        </ul>
    </>
  );
}

export default App