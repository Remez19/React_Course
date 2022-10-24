/**
 * the url of the file:
 * /api/new-meetup
 */
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://@react-udemy.bbvem7r.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const DataBase = client.db();
    const meetupsCollection = DataBase.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({ message: "New Meetup Inserted" });
  }
}

export default handler;
