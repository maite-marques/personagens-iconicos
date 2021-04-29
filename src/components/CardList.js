import React from 'react';
import Card from './Card';

import personagens from '../data';

class CardList extends React.Component {
  render() {
    return (
      <div className="figureList">
        {personagens.map(personagem => <Card key={personagem.id} personagem={personagem} />)}
      </div>
    );
  }
}

export default CardList;