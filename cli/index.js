#! /usr/bin/env node

import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs";
import { createSpinner } from "nanospinner";
import { download } from "obtain-git-repo";

function run() {
  figlet("VUE3-ADMIN", async (err, data) => {
    console.log(data);

    console.log(
      chalk.green(`项目仓库：https://github.com/Luff-JM/vue3-ts-admin`)
    );

    const message = await inquirer.prompt({
      name: "dirname",
      type: "input",
      message: "请输入目录名",
      default() {
        return "vue3-admin";
      },
    });

    const dirExists = fs.existsSync(message.dirname);

    if (dirExists) {
      console.log(chalk.redBright("目录已经存在"));
    } else {
      const spinner = createSpinner("开始下载...").start();

      download(
        "direct:https://github.com/Luff-JM/vue3-ts-admin",
        message.dirname,
        { clone: true },
        function (err) {
          if (err) {
            spinner.error({ text: "下载失败" });
          } else {
            spinner.success({
              text: "项目创建成功，请依次执行以下命令",
            });
            console.log(chalk.white(`cd ${message.dirname}`));
            console.log(chalk.white("pnpm i"));
            console.log(chalk.white("pnpm run dev"));

            return;
          }
        }
      );
    }
  });
}

run();
