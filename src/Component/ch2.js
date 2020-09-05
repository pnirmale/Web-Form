import React from 'react' ;
import ReactDOM from 'react-dom';
const name="Pathamesh";
const currDate=new Date().toLocaleDateString();
const currTime=new Date().toLocaleTimeString();
ReactDOM.render(
<>
<h1>hello ,My Name is{name}</h1>,
<p>Current Date={currDate}</p>
<p>Current Time={currTime}</p>
</>,
document.getElementById('root')
);