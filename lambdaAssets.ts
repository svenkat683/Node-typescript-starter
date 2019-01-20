import shell from "shelljs";

shell.cp("-R", "package.json", "dist/");
shell.cp("-R", "lambda.env.json", "dist/");