const taskModel = require("../model/tasks");
module.exports = {
  getCheckList: async (req, res) => {
    try {
      const task = await taskModel.find({}, {}).lean();
      return res.status(200).json({ data: task });
    } catch (error) {
      console.log(error.message);
    }
  },

  updateTask: (req, res) => {
    try {
      // const task = await taskModel.replaceOne(req.)
    } catch (error) {}
    req.body.taskList;
    taskModel.updateMany();
  },
  addTask: async (req, res) => {
    try {
      const taskResult = await taskModel.create(req.body);
      return res.status(200).json(taskResult);
    } catch (error) {
      console.log(error);
    }
  },
};
