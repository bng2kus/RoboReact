import React from 'react';

const Scroll = (props) => {
	return(
		//everthing that the comopnent scroll wraps around the div it will be effetced
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
			{props.children}
		</div>

	);
};

export default Scroll;