import CardItem from './CardItems';
import './Cards.css';

function Cards() {
  return (
    <div className='cards-container'>
      <h1 id='projects' className='line typewriter'>My Projects</h1>
      <CardItem />
    </div>
  );
}

export default Cards;