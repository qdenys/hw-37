import React, {useState} from 'react';
import Smiley from './Smiley';
import Counter from './Counter';

const App = () => {
	const [clicks, setClicks] = useState({
		'😊': 0,
		'😇': 0,
		'😍': 0
	});

	const handleSmileyClick = (symbol) => {
		setClicks(prevState => ({
			...prevState,
			[symbol]: prevState[symbol] + 1
		}));
	};

	const getMaxClickedSmiley = () => {
		const maxClicks = Math.max(...Object.values(clicks));
		return Object.keys(clicks).find(key => clicks[key] === maxClicks);
	};

	return (
			<div>
				<Smiley symbol="😊" onClick={() => handleSmileyClick('😊')}/>
				<Smiley symbol="😇" onClick={() => handleSmileyClick('😇')}/>
				<Smiley symbol="😍" onClick={() => handleSmileyClick('😍')}/>
				<Counter count={clicks['😊']}/>
				<Counter count={clicks['😇']}/>
				<Counter count={clicks['😍']}/>
				<button onClick={() => alert(`Winner: ${getMaxClickedSmiley()}`)}>Show Results</button>
			</div>
	);
};

export default App;
