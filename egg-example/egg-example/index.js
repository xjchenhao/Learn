'use strict';

// npm run dev DO NOT read this file（npm运行dev不读这个文件）

require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
});
