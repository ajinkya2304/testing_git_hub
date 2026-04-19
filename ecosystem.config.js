module.exports = {
  apps: [
    {
      name: "demo-app",
      script: "app.js",
      instances: "max",   // use all CPU cores
      exec_mode: "cluster",
      env: {
        PORT: 3000
      }
    }
  ]
};
