const config = {
  appwriteUrl: String(import.meta.env.REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.REACT_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.REACT_APP_APPWRITE_DATABASE_ID),
  appwriteEventCollectionId: String(
    import.meta.env.REACT_APP_APPWRITE_EVENT_COLLECTION_ID
  ),
  appwriteUserCollectiontId: String(
    import.meta.env.REACT_APP_APPWRITE_USER_COLLECTION_ID
  ),
  appwriteBucketId: String(import.meta.env.REACT_APP_APPWRITE_BUCKET_ID),
};

export default config;
