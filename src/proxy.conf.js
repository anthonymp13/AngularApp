const PROXY_CONFIG = [
  {
    context: [
      "/appointments",
    ],
    target: "https://localhost:7100",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
