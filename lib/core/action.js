import inquirer from 'inquirer';

import { framwork, framworkUrl } from '../../config.js';
import { downloadFun } from './download.js';
export default async (project, args) => {
  // 命令行执行逻辑代码
  // console.log(project, args);
  // express koa egg
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framwork',
      choices: framwork,
      message: '请选择使用的框架'
    }
  ])
  console.log(answer);
  downloadFun(framworkUrl[answer.framwork], project)
}

