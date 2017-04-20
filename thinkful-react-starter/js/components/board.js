import React from 'react';
import CardList from './list';
import ListContainer from '/.list-container'

export default class Board extends React.Component {
     constructor(props) {
        super(props)

    }


    render() {
        const data = [{title: 'List 1', cards: ['baseball', 'football', 'hockey']}, {title: 'List 2', cards: ['batman', 'superman', 'iron man']}, {title: 'List 3', cards: ['hello', 'goodbye', 'aloha']}]
        const lists = data.map((list, index) => <ListContainer key={index} list={list} />)
        return (
            <div>
                {lists}
            </div>
        );
    }
}