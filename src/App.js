import './App.css';
import { Route, Switch } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './views/Home';
import Team from './views/Team';
import About from './views/About';

function App() {
	return (
		<div className='app'>
			<TopNavbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/team' exact component={Team} />
			</Switch>
		</div>
	);
}

export default App;
