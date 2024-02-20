module.exports = {
    apps: [
        {
            name: 'frontend',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            instances: 1,
            autorestart: true,
            exec_mode: 'fork',
            watch: false,
            max_memory_restart: '500M',
            out_file: './out.log',
            error_file: './error.log',
            merge_logs: true,
            ignore_watch: ['node_modules', 'out.log', 'error.log'],
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ]
};
