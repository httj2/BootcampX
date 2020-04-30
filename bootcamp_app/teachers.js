const { Pool } = require('pg');
const process = require('process');

const pool = new Pool({
  user: 'vagrant',
  password: 'corgi123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});


pool
.connect()
.then(() => console.log('connected!'))
.then(() => pool.query(` SELECT teachers.name AS teacher, cohorts.name AS cohort
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name = '${process.argv[2]}'
  ORDER BY teacher;
`) 
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
}).catch(err => console.error('query error', err.stack))
);
