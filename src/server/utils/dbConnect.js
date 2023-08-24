import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;
}

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

connectDB();

export default dbConnect;
