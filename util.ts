import * as dotenv from 'dotenv';
dotenv.config();

export function genRandomTimeout() {
  const min = 3, max = 10;
  return Math.floor(Math.random() * (max - min) + min);
}

export async function sendNotification(message: string) {
  const sendMessage = () => fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    }),
  })

  await sendMessage();
}
