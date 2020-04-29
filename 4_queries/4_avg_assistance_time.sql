--Get the average time of an assistance request.--
SELECT AVG(completed_at - started_at) AS average_assistance_request_duration
FROM assistance_requests;
