import React from 'react';

function App() {
	const users = [
		{name: 'user1', surn: 'surn1', age: 30},
		{name: 'user2', surn: 'surn2', age: 31},
		{name: 'user3', surn: 'surn3', age: 32},
	];
     const result = users.map(function(item,index){
		return <li key = {index}>{item}</li>})

	
	return<div><ul>{result}</ul></div>
}



export default App;
