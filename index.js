const JSONContexts = require('./contexts')

const constants = require("./constants");

const contexts = new Map();
contexts.set(constants.SECURITY_CONTEXT_V1_URL, JSONContexts.SecurityV1);
contexts.set(constants.SECURITY_CONTEXT_V2_URL, JSONContexts.SecurityV2);

module.exports = {
    contexts,
    constants,
}
