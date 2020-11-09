import { Client } from 'discord.js';
import handleMessage from './handler';

/**
 * Get an instance of the bot client.
 *
 * @return {Client}
 */
export const getClient = async (): Promise<Client> => {
  const client = new Client();

  console.log('Starting bot...');

  // Bot is ready
  client.on('ready', () => {
    console.log(`Connected.`);
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity("Just vibin'");
  });

  client.on('message', handleMessage);

  process.on('exit', () => {
    console.log(`Process exit.`);
    client.destroy();
  });

  process.on('uncaughtException', (err: Error) => {
    const errorMsg = (err ? err.stack || err : '').toString().replace(new RegExp(`${__dirname}\/`, 'g'), './');
    console.error(errorMsg);
  });

  process.on('unhandledRejection', (err: Error) => {
    console.error('Uncaught Promise error: \n' + err.stack);
  });

  client.on('error', console.error);
  client.on('warn', console.warn);

  return client;
};
