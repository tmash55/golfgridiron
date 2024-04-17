import config from "@/config/config";
import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  datbases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl, config.appwriteProjectId);
    this.datbases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async getEvent(slug) {
    try {
      return await this.datbases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteEventCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getEvent()", error);
      return false;
    }
  }
  async getActiveEvents(queries = [Query.search("status", "active")]) {
    try {
      return await this.datbases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteEventCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getActiveEvents()", error);
      return false;
    }
  }
}
