import React, { useState } from 'react';
import {studentsArr} from '../data/studentsData';
import uuid from 'uuid';

// components
import StudentCard from './studentCard';

const StudentList = () => {
	const [students, setStudents] = useState(studentsArr);

	return (
		<div className="student-list">
			<h1>This is the student list component</h1>
			{/* I want to create a card for each of the students in the student array (that's coming in from the data folders) */}
			{students.map((currentStudent, index) => <StudentCard key={uuid()} currentStudent={currentStudent} currentIndex={index} />)}
		</div>
	)
}

export default StudentList;