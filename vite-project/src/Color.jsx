import React, { useState } from "react"
const Color= () => {
	const [num, setNum] = useState(0);

	const randomNumberInRange = () => {
		return Math.floor(Math.random()
			* (max - min + 1));
	};

	const handleClick = () => {
		setNum(randomNumberInRange(1, 11));
	};

	return (
		<div className="wrapper">
			<h2>Number is: {num}</h2>
			<button onClick={handleClick}>
				Click Me Generate
			</button>
		</div>
	);
};

export default Color;
