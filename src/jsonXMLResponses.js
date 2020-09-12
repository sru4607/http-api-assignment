const sendJSON = (request, response, status, content) => {
  const messageToSend = JSON.stringify(content);
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(messageToSend);
  response.end();
};
const sendXML = (request, response, status, content) => {
  response.writeHead(status, { 'Content-Type': 'text/xml' });
  response.write(content);
  response.end();
};
const success = (request, response, responseType) => {
  console.log(responseType);
  console.log('text/xml');
  if (responseType[0] === 'text/xml') {
    // create xml object and add data
    const responseXML = '<response><message>This is a successful response</message></response>';
    // send response of type json with content of string
    return sendXML(request, response, 200, responseXML);
  }
  // create json object
  const JSONObj = {
    message: 'This is a successful response',
  };
  // send response of type json with content of string
  return sendJSON(request, response, 200, JSONObj);
};
const badRequest = (request, response, responseType, params) => {
  if (responseType[0] === 'text/xml') {
    if (params.valid && params.valid === 'true') {
      // create xml object and add data
      const responseXML = '<response><message>This is a successful response</message><id>badRequest</id></response>';
      return sendXML(request, response, 200, responseXML);
    }
    // Non-Valid Request
    // create xml object and add data
    const responseXML = '<response><message>This is a bad request</message></response>';
    return sendXML(request, response, 400, responseXML);
  }
  if (params.valid && params.valid === 'true') {
    // create JSON object
    const JSONObj = {
      message: 'This is a successful response',
    };
    // send response of type json with content of string
    return sendJSON(request, response, 200, JSONObj);
  }
  // create JSON object
  const JSONObj = {
    id: 'badRequest',
    message: 'This is a bad request',
  };
  return sendJSON(request, response, 400, JSONObj);
};
const unauthorized = (request, response, responseType, params) => {
  if (responseType[0] === 'text/xml') {
    if (params.loggedIn && params.loggedIn === 'true') {
      // create xml object and add data
      const responseXML = '<response><message>This is a successful response</message></response>';
      return sendXML(request, response, 200, responseXML);
    }
    // Non-Valid Request
    // create xml object and add data
    const responseXML = '<response><message>This is a bad request</message><id>unauthorized</id></response>';
    return sendXML(request, response, 401, responseXML);
  }
  if (params.loggedIn && params.loggedIn === 'true') {
    // create JSON object
    const JSONObj = {
      message: 'This is a successful response',
    };
    // send response of type json with content of string
    return sendJSON(request, response, 200, JSONObj);
  }
  // create JSON object
  const JSONObj = {
    id: 'unauthorized',
    message: 'This is a bad request',
  };
  return sendJSON(request, response, 401, JSONObj);
};
const forbidden = (request, response, responseType) => {
  if (responseType[0] === 'text/xml') {
    // create xml object and add data
    const responseXML = '<response><message>This is a forbidden request</message><id>forbidden</id></response>';
    // send response of type json with content of string
    return sendXML(request, response, 403, responseXML);
  }
  // create json object
  const JSONObj = {
    id: 'forbidden',
    message: 'This is a forbidden request',
  };
  // send response of type json with content of string
  return sendJSON(request, response, 403, JSONObj);
};
const internal = (request, response, responseType) => {
  if (responseType[0] === 'text/xml') {
    // create xml object and add data
    const responseXML = '<response><message>This is a internal error</message><id>internal</id></response>';
    // send response of type json with content of string
    return sendXML(request, response, 500, responseXML);
  }
  // create json object
  const JSONObj = {
    id: 'interal',
    message: 'This is a internal error',
  };
  // send response of type json with content of string
  return sendJSON(request, response, 500, JSONObj);
};
const notImplemented = (request, response, responseType) => {
  if (responseType[0] === 'text/xml') {
    // create xml object and add data
    const responseXML = '<response><message>A get request for this page has not been implemented yet. Check again later for updated content.e</message><id>notImplemented</id></response>';
    // send response of type json with content of string
    return sendXML(request, response, 501, responseXML);
  }
  // create json object
  const JSONObj = {
    id: 'notImplemented',
    message: 'A get request for this page has not been implemented yet. Check again later for updated content.',
  };
  // send response of type json with content of string
  return sendJSON(request, response, 501, JSONObj);
};
const notFound = (request, response) => {
  // create json object
  const JSONObj = {
    id: 'notFound',
    message: 'The page you are looking for was not found.',
  };
  // send response of type json with content of string
  return sendJSON(request, response, 404, JSONObj);
};

module.exports = {
  success,
  badRequest,
  unauthorized,
  forbidden,
  internal,
  notImplemented,
  notFound,
};
