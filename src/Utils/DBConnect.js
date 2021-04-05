import mongoose from 'mongoose';

const connection = {};
async function dbConnect() {
    const MONGODB_CONNECTION_URI = `mongodb+srv://LoneWolf:<Emailaccess24>@emaildb.phbcr.mongodb.net/Clusters?retryWrites=true&w=majority`
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(MONGODB_CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("connect successfull")
}

export default dbConnect;