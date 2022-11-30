const Job = require("../models/Job")
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, NotFoundError } = require("../errors")

const getAllJobs = async (req, res, next) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt")
  console.log(jobs)
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}

const getJob = async (req, res, next) => {
  res.send("get a single job")
}

const createJob = async (req, res, next) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json(job)
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
