const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const path = require("path");
const fsPromise = require("fs").promises;

console.log(format(new Date(), "ddMMyyyy\tHH:mm:ss"));

const logEvents = async (messages) => {
  const dateTime = `${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${messages}`;
  console.log(logItem);

  try {
    await fsPromise.appendFile(
      path.join(__dirname, "logs", "eventFile.txt", logItem)
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = logEvents;
