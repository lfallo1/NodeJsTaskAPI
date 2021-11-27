class CustomAPIError extends Error {
    constructor(message,statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (message, statusCode) =>{
    return new CustomAPIError(message, statusCode);
}

module.exports = {
    CustomAPIError,
    createCustomError
}

/**

 class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

 const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode)
}

 module.exports = { createCustomError, CustomAPIError }

 */