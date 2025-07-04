import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuid } from "uuid";
import { getEnv } from "../config/env";

export const s3 = new S3Client({
  region: getEnv.AWS_REGION,
  credentials: {
    accessKeyId: getEnv.AWS_ACCESS_KEY_ID!,
    secretAccessKey: getEnv.AWS_SECRET_ACCESS_KEY!,
  },
});

export const uploadMarkdownToS3 = async (
  content: string,
  courseSlug: string,
  lessonSlug: string,
): Promise<string> => {
  if (!content || !courseSlug || !lessonSlug) {
    throw new Error("Required fields are missing for Markdown upload.");
  }

  const fileKey = `courses/${courseSlug}/lessons/${lessonSlug}-${uuid()}.md`;

  const command = new PutObjectCommand({
    Bucket: getEnv.S3_BUCKET_NAME,
    Key: fileKey,
    Body: content,
    ContentType: "text/markdown",
    ContentEncoding: "utf-8",
  });

  await s3.send(command);

  const url = `https://${getEnv.S3_BUCKET_NAME}.s3.${getEnv.AWS_REGION}.amazonaws.com/${fileKey}`;
  return url;
};
