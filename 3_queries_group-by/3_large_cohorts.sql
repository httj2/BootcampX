-- Get all cohorts with 18 or more students. --
SELECT cohorts.name as cohort_name, count(students.*) as students_count
FROM cohorts
JOIN students ON cohorts.id = cohort_id
GROUP BY cohort_name
HAVING count(students.*) >= 18
ORDER BY students_count;
