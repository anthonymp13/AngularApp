const PROXY_CONFIG = [
  {
    context: [
      "/appointments",
      "/api/Users/authenticate"
    ],
    target: "https://localhost:7100",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
