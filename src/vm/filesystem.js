import instructionsTxt from "./filesystem/instructions.txt?raw";
import systemInitSh from "./filesystem/system_init.sh?raw";
import accessKey from "./filesystem/access.key?raw";

export const filesystem = {
  "instructions.txt": instructionsTxt.trim(),
  "system_init.sh": systemInitSh.trim(),
  "access.key": accessKey.trim()
};