import React, { useState, useEffect } from 'react';

const SingleColor = ({ index, color }) => {
	const [isCopied, setIsCopied] = useState(false);
	const { hex, weight } = color;
	const handleClick = () => {
		navigator.clipboard.writeText('#' + hex);
		setIsCopied(true);
	};

	useEffect(() => {
		let timeout = setTimeout(() => {
			setIsCopied(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [isCopied]);

	return (
		<article className={`color ${index > 10 && 'color-light'}`} style={{ background: '#' + hex }} onClick={handleClick}>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>#{hex}</p>
			{isCopied && <p className='alert'>Copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
