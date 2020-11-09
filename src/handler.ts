import { Message } from 'discord.js';

const messageHandler = async (message: Message): Promise<void> => {
  if (message.content === '^join') {
    if (message.member.voice.channel != null) {
      message.member.voice.channel.join().then((conn) => {
        message.channel.send(`Playing on repeat in ${conn.channel.name}`);

        const play = (): void => {
          console.log('Playing');

          const dispatcher = conn.play('./assets/file_to_play.mp3');
          dispatcher.on('finish', () => {
            play();
          });
        };

        play();
      });
    } else {
      message.channel.send(`I can't join if you're not in a voice channel`);
    }
  }
};

export default messageHandler;
