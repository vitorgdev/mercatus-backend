class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
const handleError = (err, res) => {
  console.log(err);
  if (err.name === "SequelizeDatabaseError") {
    var { statusCode, message } = dbError(err);
  } else if (err.hasOwnProperty("errors")) {
    var { statusCode, message } = validationError(err);
  } else {
    var { statusCode, message } = err;
  }
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

const dbError = (err) => {
  switch (err.parent.code) {
    case "ER_NO_DEFAULT_FOR_FIELD":
      return { statusCode: 406, message: err.message };
      break;

    default:
      break;
  }
};

const validationError = (err) => {
  var message = [];
  err.errors.forEach((element) => {
    message.push({
      field: element.path,
      wrongValue: element.value,
      type: element.type,
      validatorKey: element.validatorKey,
      validatorArgs: element.validatorArgs,
    });
  });
  return { statusCode: 406, message: message };
};
module.exports = {
  ErrorHandler,
  handleError,
};
