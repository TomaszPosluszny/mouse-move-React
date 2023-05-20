import { useState } from 'react';
import NameFormatter from './NameFormate';
import MouseComponent from './MouseComponent';


function MyComponent() {
	const [name, setName] = useState('Tomek');
	const inputHandler = (e) => {
		setName(e.target.value);
	};
	return (
		<div>
			<h2>Name:</h2>
			<input value={name} onChange={inputHandler} />
			<NameFormatter name ={name}/>
             { name !== "Adam" &&<MouseComponent/>}
		</div>
	);
}
export default MyComponent;
