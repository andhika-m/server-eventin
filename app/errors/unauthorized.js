const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api-error');

class Unathorized extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
module.exports = Unathorized;
