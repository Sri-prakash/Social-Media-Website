const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://ShreePrakash:iIdz93oMlgRn38Wm@cluster0.uylkq3o.mongodb.net/?retryWrites=true&w=majority";
  try {
    const connect = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected : ${connect.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
