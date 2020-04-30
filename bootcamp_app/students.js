const { Pool } = require('pg');
// const process = require('process');

const pool = new Pool({
  user: 'vagrant',
  password: 'corgi123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432
});

pool
  .connect()
  .then(() => console.log("Heyyyyy I'm connected !"))
  .then(() => console.log(process.argv))
  .then(() => pool.query(`
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${process.argv[2]}%'
  LIMIT ${process.argv[3] || 5};
  `)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    })
  }).catch(err => console.error('query error', err.stack))
  );