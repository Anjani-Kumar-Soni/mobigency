import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL);
    const connection = mongoose.connection; // connection key recieved

    // now easily manage different events of mongodb connections
    connection.on("connected", () => {
      console.log("Database connected");
    });
    connection.on("error", (err) => {
      console.log("Some error occured in database", err);
      process.exit(); // it doesn't make sense to go on with an error
      // in db connection so close the connection
    });
  } catch (e) {
    console.log("Error while connecting to database");
  }
}
