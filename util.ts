export function genRandomInterval() {
  const min = 3, max = 20;
  return Math.floor(Math.random() * (max - min) + min);
}

export async function sendNotification(message: string) {

  const sendMessage = () => fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    }),
  })

  await sendMessage();
}