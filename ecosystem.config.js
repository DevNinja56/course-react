module.exports = {
    apps: [
        {
            name: 'frontend',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            instances: 1,
            autorestart: true,
            exec_mode: 'fork',
            watch: true,
            max_memory_restart: '300M',
            out_file: './out.log',
            error_file: './error.log',
            merge_logs: true,
            ignore_watch: ['node_modules', 'upload', 'out.log', 'error.log']
        }
    ]
};
