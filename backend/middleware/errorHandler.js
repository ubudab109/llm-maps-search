/**
 * The errorHandler function logs errors and sends a 500 status response with an error message in JSON
 * format.
 * @param err - The `err` parameter in the `errorHandler` function represents the error object that is
 * passed to the function when an error occurs during the execution of a request. This error object
 * contains information about the error, such as the error message, stack trace, and other relevant
 * details. The function uses this
 * @param req - The `req` parameter typically represents the HTTP request object, which contains
 * information about the incoming request such as headers, parameters, body, etc. It is used to access
 * data sent by the client to the server.
 * @param res - The `res` parameter in the `errorHandler` function is the response object in
 * Express.js. It is used to send a response back to the client making the request. In this case, it is
 * being used to set the status code to 500 (Internal Server Error) and send a JSON
 * @param next - The `next` parameter in the errorHandler function is a callback function that is used
 * to pass control to the next middleware function in the stack. It is typically used in Express.js
 * middleware functions to move to the next middleware in case of an error or to continue processing
 * the request.
 */
export function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: 'internal_error', detail: String(err.message || err) });
}
