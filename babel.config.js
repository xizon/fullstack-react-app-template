module.exports = {
  "presets": [

    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    [
      "@babel/preset-react"
    ],
    [
      "@babel/preset-typescript"
    ]
  ],
  "plugins": [
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties"
    ],
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "@/components": "./src/components",
        "@/plugins": "./src/components/_plugins",
        "@/router": "./src/router",
        "@/pages": "./src/views/_pages"
      }
    }]

  ]
};
