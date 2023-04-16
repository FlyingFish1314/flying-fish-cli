#!/usr/bin/env node
// const { program } = require('commander')
import { program } from 'commander'
// help模块化封装
// const myhelp = require('../lib/core/help')
import myhelp from '../lib/core/help.js'
myhelp(program)
// const mycommander = require('../lib/core/mycommander')
import mycommander from '../lib/core/mycommander.js'
mycommander(program)




// 默认提供的--help的处理
program.parse(process.argv)