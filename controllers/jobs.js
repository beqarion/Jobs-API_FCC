const getAllJobs = async (req, res, next) => {
  res.send("get all jobs")
}
const getJob = async (req, res, next) => {
  res.send("get a single job")
}
const createJob = async (req, res, next) => {
  res.json(req.user)
}
const updateJob = async (req, res, next) => {
  res.send("update job")
}
const deleteJob = async (req, res, next) => {
  res.send("delete job")
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
