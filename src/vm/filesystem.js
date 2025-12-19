export const filesystem = {
    "instructions.txt":
    `
    Welcome to my hackable filesystem!
    To gain access to my website, you must complete your mission. 
    
    Don't Worry! You'll be guided along the way!
    Or skip this and access the website directly at:
    (Will put a override command here later)

    Why don't you start by checking out the available commands? 
    ** Hint ** Try asking for 'help'. 
    `.trim(),

    "system_init.sh": `
#!/bin/sh
System initialization script.
Run 'run access_init' to validate your key.
`.trim(),

  "access.key": `
ACCESS-KEY-ALX-97
`.trim()
};