import runtimeEnv from "@mars/heroku-js-runtime-env";
const env = runtimeEnv();
module.exports = {
  PORT: env.PORT || 8080,
  API_BASE_URL: env.REACT_APP_API_BASE_URL || "http://localhost:8080"
};
