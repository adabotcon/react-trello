import React from 'react';
import CardList from './list';

export default function Board(props) {
    const cardArray = props.lists.map((list, index) =>
        <CardList text={list.title} />
    );
    return (
        <div>
         <div className="board-title">{props.title}</div>
         <div className="board">
             {cardArray}
          </div>
        </div>
    );
}