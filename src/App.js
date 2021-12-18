import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [palette, setPalette] = useState([]);
	const [isColor, setIsColor] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			const newColor = new Values(color);
			setPalette(newColor.all(10));
			setIsColor(true);
		} catch (error) {
			console.error(error);
			setIsColor(false);
		}
	};

	return (
		<main>
			<section className='container'>
				<h3>Color Generator</h3>
				<form action='submit' onSubmit={handleSubmit}>
					<input className={`${!isColor ? 'error' : null}`} type='text' id='color' name='color' placeholder='#000000' onChange={(e) => setColor(e.target.value)} />
					<button className='btn'>Submit</button>
				</form>
			</section>
			<section className='colors'>
				{palette.map((color, index) => {
					return <SingleColor key={index} index={index} color={color} />;
				})}
			</section>
		</main>
	);
}

export default App;
