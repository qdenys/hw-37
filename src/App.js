import React, {Component} from 'react';
import Smiley from './Smiley';
import Counter from './Counter';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: {
				'😊': 0,
				'😇': 0,
				'😍': 0
			}
		};
	}

	handleSmileyClick = (symbol) => {
		this.setState(prevState => ({
			clicks: {
				...prevState.clicks,
				[symbol]: prevState.clicks[symbol] + 1
			}
		}));
	}

	getMaxClickedSmiley = () => {
		const {clicks} = this.state;
		const maxClicks = Math.max(...Object.values(clicks));
		return Object.keys(clicks).find(key => clicks[key] === maxClicks);
	}

	render() {
		const {clicks} = this.state;
		return (
				<div>
					<Smiley symbol="😊" onClick={() => this.handleSmileyClick('😊')}/>
					<Smiley symbol="😇" onClick={() => this.handleSmileyClick('😇')}/>
					<Smiley symbol="😍" onClick={() => this.handleSmileyClick('😍')}/>
					<Counter count={clicks['😊']}/>
					<Counter count={clicks['😇']}/>
					<Counter count={clicks['😍']}/>
					<button onClick={() => alert(`Winner: ${this.getMaxClickedSmiley()}`)}>Show Results</button>
				</div>
		);
	}
}

export default App;
