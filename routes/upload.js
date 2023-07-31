const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const { imageUploader } = require("../controller/uploadFile");
// Image Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileToSave =
      file.fieldname +
      "-" +
      uniqueSuffix +
      "." +
      file.originalname.substring(file.originalname.lastIndexOf(".")[1]);
    req.fileToSave = fileToSave;
    cb(null, fileToSave);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format

      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});
// const imageUpload = multer({
//   storage: imageStorage,

// });

// For Single image upload
router.post("/uploadImage", upload.array("image"), imageUploader);

router.get(
  "/getImage",
  // upload.array("image"),
  (req, res) => {
    console.log("fileToSave==", req.fileToSave);
    res.send(req.image);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = router;
