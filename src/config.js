// import runtimeEnv from "@mars/heroku-js-runtime-env";
// const env = runtimeEnv();

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";
// export const PORT = env.PORT || 8080;

// export default {
//   PORT: env.PORT || 8080,
//   API_BASE_URL: env.REACT_APP_API_BASE_URL || "http://localhost:8080"
// };
