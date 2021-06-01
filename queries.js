const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const getopportunity = (request, response) => {
  pool.query('SELECT A.opportunity_status_id,A.leadFee_servicefee,A.currentbalanceinpennies,A.updated,A.percentcommitted,A.contractid,A.loan_id,A.percentfunded,A.id,A.lead_name,A.lead_userid,A.lead_fi_id,A.grading,A.location_state,A.rate,A.dueby,A.term,A.created,A.retaining,A.resourcetype,A.description FROM	cbanc2.opportunity AINNER JOIN cbanc2.fi B ON A.lead_fi_id = B.id INNER JOIN cbanc2.loan C ON A.loan_id = C.id INNER JOIN cbanc2.loan_resource_type D ON C.loan_resource_type_id = D.id', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
insertopportunity
}
