const commandHistory = [];
const availableCommands = ['todo', 'task', 'help'];

export const enterEvent = (e) => {
  if (e.key === 'Enter') {
    const command = prompt.value;
    commandHistory.push(command);
    prompt.value = '';
    console.log(commandHistory);
  }
};

export const inputResult = () => {
  const command = commandHistory[-1];
  output.execCommand(command);
};

export const parseCommand = () => {
  const command = commandHistory[-1];
  const splitCommand = command.split(' ');

  availableCommands.find(x === splitCommand[0]);
};
