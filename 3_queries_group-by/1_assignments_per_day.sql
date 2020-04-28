-- Get the total number of assignments for each day of bootcamp --
SELECT day, count(*) as total_assignments
FROM assignments
GROUP by day
ORDER BY day;