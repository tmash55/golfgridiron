const config = {
  appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
  appwriteEventCollectionId: String(
    process.env.REACT_APP_APPWRITE_EVENT_COLLECTION_ID
  ),
  appwriteUserCollectiontId: String(
    process.env.REACT_APP_APPWRITE_USER_COLLECTION_ID
  ),
  appwriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID),
};

export default config;
