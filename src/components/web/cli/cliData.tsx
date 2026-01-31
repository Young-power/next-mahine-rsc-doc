export interface CliCommand {
  title: string;
  description: string;
  command: string;
}

export const cliCommands: CliCommand[] = [
  {
    title: "Run (NPX)",
    description: "Run the inspector without installing it globally.",
    command: "npx next-mahine-rsc-inspector",
  },
  {
    title: "Global Install",
    description: "Install the CLI globally and run it from anywhere.",
    command: `npm install -g next-mahine-rsc-inspector
next-mahine-rsc-inspector`,
  },
  {
    title: "Export JSON",
    description: "Print the inspection report as JSON to the console.",
    command: "next-mahine-rsc-inspector --json",
  },
  {
    title: "Save JSON File",
    description: "Save the inspection report to a JSON file.",
    command: "next-mahine-rsc-inspector -o report.json",
  },
];
