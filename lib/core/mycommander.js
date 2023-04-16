// const myAction = require('./action')
import myAction from './action.js'
export default (program) => {
  program
    .command('create <project> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(myAction);
}

