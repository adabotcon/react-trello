import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
    }

    submitForm(event) {
        event.preventDefault()
        console.log('form submitted')
        this.props.onAddSubmit()
    }

    render() {
        const cardArray = this.props.list.cards.map((cardText, index) => <Card key={index} text={cardText} />);
        return (
            <div>
                <div className="list-title">{this.props.list.title}</div>
                <div className="card-list">
                    {cardArray}
                </div>
                <form onSubmit={this.submitForm}>
                    <input type="text" onChange={this.props.onAddInputChanged}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }

}
