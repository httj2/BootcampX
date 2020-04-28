-- Get the students who's average time it takes to complete an assignment is less than the average estimated time it takes to complete an assignment.--

SELECT students.name AS student, AVG(assignment_submissions.duration) AS average_assignment_duration, AVG(assignments.duration) AS average_estimated_duration
FROM students
JOIN assignment_submissions ON student_id = students.id
JOIN assignments ON assignment_id = assignments.id
WHERE end_date IS NULL
GROUP BY student
HAVING AVG(assignment_submissions.duration) < avg(assignments.duration)
ORDER BY average_assignment_duration;