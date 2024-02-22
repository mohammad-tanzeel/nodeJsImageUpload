const mongoose = require("mongoose");
const taskSchemaRule = {
  icChecked: {
    type: Boolean,
    default: false,
    require: true,
  },
  taksName: {
    type: String,
    require: true,
  },
};

const taskSchema = new mongoose.Schema(taskSchemaRule);

module.exports = mongoose.model("tasks", taskSchemaRule);
