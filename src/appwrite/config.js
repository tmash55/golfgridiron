import config from "@/config/config";
import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl, config.appwriteProjectId);
    this.datbases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async getEvent(slug) {
    try {
      return await this.databases.getDocument(
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
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteEventCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getActiveEvents()", error);
      return false;
    }
  }
  async createEvent({ title, slug, description, isPublic, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteEventCollectionId,
        slug,
        {
          title,
          description,
          isPublic,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createEvent() :: ", error);
      return false;
    }
  }
  async updateEvent(slug, { title, description, isPublic, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteEventCollectionId,
        slug,
        {
          title,
          description,
          isPublic,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updateEvent() :: ", error);
      return false;
    }
  }

  async deleteEvent(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteEventCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteEvent() :: ", error);
      return false;
    }
  }
}
