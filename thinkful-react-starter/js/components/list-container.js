import React from 'react';
import CardList from './list';

export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            cards: []
        };
    }

    onAddInputChanged() {
        this.setState({
            inputText: 'this is a card' 
        });
    }

    onAddSubmit() {
        console.log('on add submit')
        this.setState({
            cards: cards + this.state.inputText
        })
    }

    render() {
         return (
           <div>
               <CardList cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} onAddSubmit= {this.onAddSubmit} />
           </div>
         );
    }
}