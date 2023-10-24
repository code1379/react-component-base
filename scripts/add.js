import { join, resolve } from "path";
import { spawn } from "child_process";
import * as glob from "glob";
import fs from "fs-extra";
import handlebars from "handlebars";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

function getCurrentDir() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return __dirname;
}

// abc-xyz => AbcXyz
const varCase = (str) =>
  str
    .replace(/-[a-z]/g, (m) => m[1].toUpperCase())
    .replace(/^.{1}/, (m) => m.toUpperCase());

const lowCase = (str) =>
  str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).replace(/^-/, "");

(() => {
  const currentDir = process.cwd();
  const name = process.argv[2];
  // 文件夹名 date-picker
  const componentDirName = lowCase(name);
  // 组件名 DatePicker
  const componentName = varCase(name);
  // 创建文件夹的路径
  const componentDir = join(currentDir, "src", componentDirName);

  spawn("mkdir", ["-p", componentDir]);

  // 读取模版目录
  const files = resolve(getCurrentDir(), "template/*.hbs");
  const templateFiles = glob.sync(files.replace(/\\/g, "/"));

  templateFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, "utf8");
    // console.log("content", content);
    const template = handlebars.compile(content);
    const result = template({
      componentDirName,
      componentName,
    });
    const newPath = filePath
      .replace(/\\/g, "/")
      .replace("scripts/template", `src/${componentDirName}`)
      // .replace("component", dirName) // => component.tsx.hbs => input.tsx 因为我文件目录叫 react-component-learn 所以也会 replace 掉，所以我把这个注释掉
      .replace("component.tsx", `${componentDirName}.tsx`)
      .replace(".hbs", "");

    await fs.writeFile(newPath, result);
    // console.log(chalk.green(`write ${newPath} success`));
    console.log("success");
  });
})();
