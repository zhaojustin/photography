const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: "AKIARIR5I6K6AD7HMAFZ",
  secretAccessKey: "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",
});

const BUCKET_NAME = "justinzhao-photography";

module.exports = async function listObjectsInBucket(bucketName) {
  // Create the parameters for calling listObjects
  var bucketParams = {
    Bucket: bucketName,
  };

  // Call S3 to obtain a list of the objects in the bucket
  s3.listObjects(bucketParams, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      let keys = [];
      for (var i = 0; i < data.Contents.length; i++) {
        keys.push(data.Contents[i].Key);
      }

      return keys;
    }
  });
};
