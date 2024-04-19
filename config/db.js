import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  const mongoUrl =
    "mongodb+srv://Shehryar:1452Shery@clusterpractice.ibhdb6e.mongodb.net/Ecommerce_db-01";
  try {
    const conn = await mongoose.connect(mongoUrl);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
