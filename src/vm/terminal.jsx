import React, { useState } from "react";
import { commandMap } from "../vm/commands";
import { filesystem } from "../vm/filesystem";
import { height, width } from "@fortawesome/free-brands-svg-icons/fa11ty";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const handleCommand = (cmd) => {
    let output = "";

    // handle special commands like "cat <filename>"
    if (cmd.startsWith("cat ")) {
      const file = cmd.split(" ")[1];
      output = filesystem[file] || `cat: ${file}: No such file`;
    }

    // handle run commands that are defined
    else if (cmd.startsWith("run ")) {
      if (cmd === "run access_init") {
        // Step 6 hits backend, but for now we fake it
        output = "[!] Backend validation required...";
      } else {
        output = commandMap[cmd] || `run: cannot execute '${cmd}'`;
      }
    }

    else if (cmd === "clear") {
        setHistory([]);
        return; 
    }

    // regular commands
    else {
      output = commandMap[cmd] || `command not found: ${cmd}`;
    }

    setHistory([...history, { cmd, output }]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    handleCommand(input.trim());
    setInput("");
  };

  // Terminal UI to fiddle with
  return (
    <div style={styles.container}>
      <div style={styles.terminal}>
         {/* add instructions.txt content by default here */}
        <div style={styles.command}>{filesystem["instructions.txt"]}</div>
        {history.map((entry, idx) => (
          <div key={idx}>
            <div style={styles.command}>$ {entry.cmd}</div>
            <div style={styles.output}>{entry.output}</div>
          </div>
        ))}

        <form onSubmit={onSubmit}>
          <span style={styles.prompt}>$ </span>
          <input
            style={styles.input}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#111",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  terminal: {
    width: "100%",
    background: "#000",
    padding: "20px",
    color: "#0f0",
    fontFamily: "monospace",
    fontSize: "16px",
    height: "100vh",
  },
  command: { color: "#0f0", whiteSpace: "pre-wrap" },
  output: { color: "#ccc", whiteSpace: "pre-wrap" },
  prompt: { color: "#0f0" },
  input: {
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#0f0",
    fontFamily: "monospace",
    fontSize: "16px",
    width: "90%",
  },
};
