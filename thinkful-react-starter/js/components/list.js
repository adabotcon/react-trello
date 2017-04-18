import React from 'react';
import Card from './card';

export default function CardList(props) {
    const cardArray = props.lists.map((list, index) =>
        <Card text={list.title} />
    );
    return (
        <div>
            <div className="list-title">{props.title}</div>
            <div className="card-list">
                {cardArray}
            </div>
            <form>
                <input type="text"></input>
                <button type="submit"></button>
            </form>
        </div>
    );
}

class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
    }

    onButtonClick() {
        this.setState({
            clicked: true
        })
    }

    render() {
        return (
            <div>
                <Button onChange={this.onAddInputChanged} text='Ready to be amazed?' />
                {this.state.clicked ? <SoundCloudEmbed trackId='191075550' /> : null}
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Surprise />, document.getElementById('app'))
);