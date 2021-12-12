import { MongoClient } from "mongodb";
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        try {
            const client = await MongoClient.connect(
                "mongodb+srv://rfmdev:Abc000@cluster0.4k8eo.mongodb.net/meetups?retryWrites=true&w=majority"
            );
            const db = client.db();
            const meetupsCollection = db.collection("meetups");
            const result = await meetupsCollection.insertOne(data);
            client.close();
            res.status(201).json({ message: "Meetup inserted" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Meetup failed insertion" });
        }
    }
}
export default handler;
