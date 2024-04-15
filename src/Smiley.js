import React, {Component} from 'react';

class Smiley extends Component {
	render() {
		return <div onClick={this.props.onClick}>{this.props.symbol}</div>;
	}
}

export default Smiley;
