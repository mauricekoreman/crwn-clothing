import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TopicsList = () => (
	<div>
		<h1>Topics list</h1>
	</div>
);

const TopicDetail = () => (
	<div>
		<h1>Topics detail</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/topics' component={TopicsList} />
				<Route path='/topics/:topicId' component={TopicDetail} />
			</Switch>
		</div>
	);
}

export default App;
