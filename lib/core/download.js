import download from 'download-git-repo';
import ora from 'ora'
import chalk from 'chalk';
const downloadFun = function (url, project) {
  const spinner = ora().start()
  spinner.text = '代码正在下载......'
  download(`direct:${url}`, project, { clone: true }, (err) => {
    console.log(err);
    if (!err) {
      spinner.succeed('代码下载成功')
      console.log(chalk.blue.bold('Done'), chalk.bold('you run:'))
      console.log(chalk.green('cd ' + project));
      console.log(chalk.green('npm install'));
      console.log(chalk.green('npm run dev'));
    } else {
      spinner.fail('代码下载失败')
    }
  })
}


export {
  downloadFun
} 