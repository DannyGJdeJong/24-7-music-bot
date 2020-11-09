import { getClient } from './bot';

getClient()
  .then((client) => client.login(process.env.DISCORD_TOKEN))
  .catch((error) => {
    console.error('Failed to login:', error.message);
    process.exit(1);
  });
