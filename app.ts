import {App} from '@slack/bolt'
import dotenv from 'dotenv'
import ngrok from 'ngrok'

dotenv.config()

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.APP_TOKEN,
  socketMode: true,
});


// Listens to incoming messages that contain "hello"
app.message('독설', async ({ event, message, say }) => {
  // say() sends a message to the channel where the event was triggered
  
  // @ts-ignore
  console.log(message.user as string)
  await say({'blocks': [{
    "type": "image",
    "title": {
      "type": "plain_text",
      "text": "I Need a Marg",
      "emoji": true
    },
    "image_url": "https://assets3.thrillist.com/v1/image/1682388/size/tl-horizontal_main.jpg",
    "alt_text": "marg"
  }]});
});

app.message('마법의고동램지', async ({event, message, say}) => {
  const result = Math.random() > 0.5 ? '네' : '아니'
  await say(result)
})

app.message('로또번호 알려줘요', async ({message}) => {
  
  console.log(message)
});

(async () => {
  // let url= ngrok.getUrl();
  // if (!url) {
  //   url = await ngrok.connect(3003)
  // }
  
  // Start your app
  await app.start(3003);
  console.log('⚡️ Bolt app is running!');
  // console.log(`CONNECT NGROK URL : ${url}`);
  
})();

// process.on('exit', () => {
//   ngrok.disconnect();
//   ngrok.kill();
// })
