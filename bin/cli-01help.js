#!/usr/bin/env node
// const { program } = require('commander')
import { program } from 'commander'
// console.log(process.argv);

/**
 * 自定义输入命令
 */
program.option('-f --framwork <framwork>', '设置框架')
// 默认提供的--help的处理
program.parse(process.argv)