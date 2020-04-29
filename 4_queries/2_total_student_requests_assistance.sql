-- Get the total number of assistance_requests for a student.-- 

SELECT COUNT(assistance_requests.*) AS total_assistance, students.name
FROM assistance_requests
JOIN students ON students.id = student_id
WHERE name = 'Elliot Dickinson'
GROUP BY students.name;