#!/usr/bin/env node
const { program } = require('commander')
// console.log(process.argv);

/**
 * 自定义输入命令
 */
program.option('-f --framwork <framwork>', '设置框架')

program
  .command('create <project> [other...]')
  .alias('crt')
  .description('创建项目')
  .action((project, args) => {
    // 命令行执行逻辑代码
    console.log(project, args);
  })
// 默认提供的--help的处理
program.parse(process.argv)