import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponents';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
      <Link to ="/">Home</Link>
      <Link to ="/about">About</Link>
      <Link to ="/contact">Contact</Link>
      
				<Routes>
          <Route path='/' element={<MyComponent/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={Error404}/>
				
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
