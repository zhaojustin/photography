// Create service client module using ES6 syntax.
import { S3Client } from "@aws-sdk/client-s3";
// Set the AWS Region.
const REGION = "us-east-1";
// Create an Amazon S3 service client object.
const s3Client = new S3Client({
  accessKeyId: "AKIARIR5I6K6AD7HMAFZ",
  secretAccessKey: "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",
  region: REGION,
});
export { s3Client };
