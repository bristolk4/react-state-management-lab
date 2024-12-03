const ZombieFighterItem = ({ name, price, strength, agility, img }) => {
    return (
        <ul>
            <li>
                <h3>Name: {name}</h3>
                <p>Price: {price}</p>
                <p>Strength: {strength}</p>
                <p>Agility: {agility}</p>
                <img src={img} />
                <button>Add to Team</button>
            </li>        
        </ul>
    );
  };
  
  export default ZombieFighterItem;