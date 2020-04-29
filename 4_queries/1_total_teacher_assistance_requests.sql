-- Get the total number of assistance_requests for a teacher. --
-- SELECT  COUNT(assistance_requests.id) AS total_assistance, (SELECT name FROM teachers WHERE name = 
-- 'Waylon Boehm')
-- FROM assistance_requests
-- JOIN teachers ON teachers.id = teacher_id
-- WHERE teachers.name = 'Waylon Boehm';



SELECT count(assistance_requests.*) as total_assistances, teachers.name
FROM assistance_requests
JOIN teachers ON teachers.id = teacher_id
WHERE name = 'Waylon Boehm'
GROUP BY teachers.name;
