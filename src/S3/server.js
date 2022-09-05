require("dotenv").config({ path: "../../.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const BUCKET_NAME = "justinzhao-photography";
var bucketParams = {
  Bucket: BUCKET_NAME,
};

let keys = [];
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    for (var i = 0; i < data.Contents.length; i++) {
      keys.push(data.Contents[i].Key);
    }
  }
});

app.get("/photography", (req, res) => {
  res.json(keys);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = async function listObjectsInBucket(bucketName) {
  // Create the parameters for calling listObjects
  // Call S3 to obtain a list of the objects in the bucket
};
