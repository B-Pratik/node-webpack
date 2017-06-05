# node-webpack
webpack setup for node.js application written in typescript.Application will start with cluster mode with pm2 monitoring.

### Versions Used
- Node.js: v6.0.0
- Typescript:v2.0.8
- Gulp: v3.9.1
- Webpack: v2.5.0
- PM2: v2.4.6
- Express: v4.15.3

#### Installation Steps
---
1. Install global dependencies
    ```
    npm install -g gulp typings typescript pm2
    ```
2. Install node modules
    ```
    npm install
    ```
3. Install typings packages
    ```
    typings install
    ```

#### Execution
---
    npm start

#### Monitoring
---
1. List down server status
    ```
    pm2 list
    ```
2. Stop all server instances
    ```
    pm2 stop all
    ```
3. Restart all server instances
    ```
    pm2 restart all
    ```
For more help use this [link](http://pm2.keymetrics.io/docs/usage/quick-start/#cheat-sheet)
