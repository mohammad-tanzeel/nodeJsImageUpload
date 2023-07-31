const mongoose = require("mongoose");
const fileUploadSchemaRule = {
  filePath: {
    type: String,
    required: true,
  },
};
const fileUploadSchema = new mongoose.Schema(fileUploadSchemaRule, {
  timestamps: true,
});

module.exports = mongoose.model("fileUpload", fileUploadSchema);
