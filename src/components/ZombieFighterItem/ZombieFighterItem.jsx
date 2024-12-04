const ZombieFighterItem = ({ zombieFighter, handleAddFighter }) => {
    return (
            <li>
                <h3>Name: {zombieFighter.name}</h3>
                <p>Price: ${zombieFighter.price}</p>
                <p>Strength: {zombieFighter.strength}</p>
                <p>Agility: {zombieFighter.agility}</p>
                <img src={zombieFighter.img} />
                <button onClick={() => handleAddFighter(zombieFighter.id)}>Add to Team</button>
            </li>        
    );
  };
  
  export default ZombieFighterItem;