const parseEnv = () => {
  Object.entries(process.env).forEach(([key, value]) =>
    console.log(`RSS_${key}=${value};`)
  );
};

parseEnv();
