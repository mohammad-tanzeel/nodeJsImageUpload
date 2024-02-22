const uploadModel = require("../model/fileUpload");

module.exports.imageUploader = async (req, res) => {
  console.log("fileToSave==", req.fileToSave);
  await uploadModel.create({ filePath: req.fileToSave });

  res.send(req.fileToSave);

  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  };
};

module.exports.getImages = async (req, res) => {
//  debugger;
  const imgs_url = [
    {
      title: "Cat1",
      url: "https://s3-us-west-2.amazonaws.com/appsdeveloperblog.com/images/cats/cat-1.jpg",
    },
    {
      title: "Cat1 Data",
      url: "https://s3-us-west-2.amazonaws.com/appsdeveloperblog.com/images/cats/cat-2.jpg",
    },
    {
      title: "Cat1 Data New",
      url: "https://s3-us-west-2.amazonaws.com/appsdeveloperblog.com/images/cats/cat-3.jpg",
    },
    {
      title: "Cat1 Data X",
      url: "https://s3-us-west-2.amazonaws.com/appsdeveloperblog.com/images/cats/cat-4.jpg",
    },
    {
      title: "Cat1 Data Y",
      url: "https://s3-us-west-2.amazonaws.com/appsdeveloperblog.com/images/cats/cat-5.jpg",
    },
    {
      title: "Cat1 Data Z",
      url: "https://s3-us-west-2.amazonaws.com/appsdeveloperblog.com/images/cats/cat-6.jpg",
    },
  ];
  console.log("fileToSave==", req.fileToSave);
  // await uploadModel.create({ filePath: req.fileToSave });

  res.status(200).send({ imgData: imgs_url });

  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  };
};
