const parseArgs = () => {
  const args = process.argv.slice(2);
  const [vars, values] = [
    args.filter((_, index) => index % 2 === 0).map((arg) => arg.slice(2)),
    args.filter((_, index) => index % 2 === 1),
  ];
  vars.forEach((_, index) => console.log(`${vars[index]} is ${values[index]}`));
};

parseArgs();
