const {CustomAPIError} = require('../exceptions/custom-error')
const errorHandlerMiddleware = (err,req,res,next) =>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message});
    }
    return res.status(500).json({msg:'Server error'})
}
module.exports = errorHandlerMiddleware;