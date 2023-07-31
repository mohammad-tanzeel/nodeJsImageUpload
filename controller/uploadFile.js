const uploadModel = require("../model/fileUpload");

module.exports.imageUploader = async (req, res) => {
  console.log("fileToSave==", req.fileToSave);
  await uploadModel.create({ filePath: req.fileToSave });

  res.send(req.file);

  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  };
};
