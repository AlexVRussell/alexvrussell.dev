import { filesystem } from "./filesystem";

const file = async (path) => (await fetch(path)).text();

export const commandMap = {
  "help": `
Available commands:
 - ls                               List files in the filesystem
 - cat <file>                       Display the contents of a file
 - run <script>                     Execute a script
 - clear                            Clear the terminal screen
`.trim(),

  "ls": Object.keys(filesystem).join("  "),

  "cat instructions.txt": () => file("src/vm/filesystem/instructions.txt"),

  "cat system_init.sh": filesystem["system_init.sh"],

  "cat access.key": filesystem["access.key"],

  "run system_init.sh": `
[+] Running system_init.sh...
System initialization script.
Run 'run access_init' to validate your key.
`.trim(),

  // This will eventually call Spring Boot
  "run access_init": "__BACKEND_VALIDATION__",

  "clear": ""
};