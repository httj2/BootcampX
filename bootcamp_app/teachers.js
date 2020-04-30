const { Pool } = require('pg');
const process = require('process');

const pool = new Pool({
  user: 'vagrant',
  password: 'corgi123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});

const queryString = `SELECT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`; 
const cohortName = process.argv[2];
const values = [`%${cohortName}%`];

pool
.connect()
.then(() => console.log('connected!'))
.then(() => pool.query(queryString, values)
          .then(res => {
          res.rows.forEach(user => {
            console.log(`${user.cohort}: ${user.teacher}`);
          })
        }).catch(err => console.error('query error', err.stack))
)
