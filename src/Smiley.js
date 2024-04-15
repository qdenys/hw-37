import React from 'react';

const Smiley = ({symbol, onClick}) => {
	return <div onClick={onClick}>{symbol}</div>;
};

export default Smiley;
