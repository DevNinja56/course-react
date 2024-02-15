module.exports = {
  apps: [
    {
      name: 'frontend',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: '1',
      autorestart: true,
      exec_mode: 'fork',
      watch: true,
      max_memory_restart: '1G'
    }
  ]
};
