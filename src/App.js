import './App.css';
import { Route, Switch } from 'react-router-dom';
import TopNavbar from './components/TopNavbar';
import Home from './views/Home';
import Team from './views/Team';
import About from './views/About';
import Footer from './components/Footer';

function App() {
	return (
		<div className='app'>
			<TopNavbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/about' exact component={About} />
				<Route path='/team' exact component={Team} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
