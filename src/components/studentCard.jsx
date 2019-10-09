import React from 'react';

const StudentCard = props => {
	return (
		<div className='student-card' style={{border: '2px solid red', marginBottom: '10px'}}>
			<h2>{props.currentStudent}</h2>
	</div>
	)
}

export default StudentCard;