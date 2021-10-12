/**  */
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
}
generateError('Error!', 123);
