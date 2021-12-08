import * as React from 'react';
import { Robot } from '../containers/App';
import Card from './Card';

interface CardListProps {
  robots: Robot[]
}

const CardList: React.FC<CardListProps> = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={user.id}
              name={user.name}
              email={user.email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;