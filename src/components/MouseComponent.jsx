import { useEffect, useState } from 'react';

export default function MouseComponent() {
	const [mouseY, setMouseY] = useState(0);
	const [mouseX, setMouseX] = useState(0);

	useEffect(() => {
		window.addEventListener('mousemove', mouseMoveHandler);

        return()=>window.addEventListener('mousemove', mouseMoveHandler)
	}, []);

	const mouseMoveHandler = (e) => {
		console.log(e);
        setMouseY(e.clientY)
        setMouseX(e.clientX)
	};
	return (
		<div>
			<p>X: {mouseX}</p>
			<p>Y: {mouseY}</p>
		</div>
	);
}
