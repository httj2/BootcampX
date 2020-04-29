-- Get each day with the total number of assignments and the total duration of the assignments.
SELECT day, COUNT(*) AS number_of_assignments, SUM(duration) AS duration
FROM assignments
GROUP BY day
ORDER BY day;