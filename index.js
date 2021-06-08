const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '1671270185:AAEDjYAmBRgMPbAHRpD-3sChsXL9QxjpFuU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  var Hi = "salom";
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
  bot.sendMessage(msg.chat.id,"Salom, qadrli Foydalanuvchim");
  }
});
bot.on('message', (msg)=>{
  var Robot = "i'm robot";
  if (msg.text.toString().toLowerCase().indexOf(Robot) === 0) {
  bot.sendMessage(msg.chat.id,"To'ppa to'g'ri siz robotsiz sizni hatto o'z fikringiz ham yo'q 😂");
  }
});
bot.onText('message',(msg)=>{
  var Hello = "hello world";
  if (msg.text.toString().toLowerCase().indexOf(Hello) === 0) {
  bot.sendMessage(msg.chat.id,"Afsonaviy so'z");
  }
});
bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, "Xush kelibsiz " + msg.from.first_name,{
"reply_markup": {
    "keyboard": [["salom", "/menKimman"],   ["hello world"], ["i'm robot"]]
    }
});
});

bot.onText(/\/menKimman/, (msg)=>{
  bot.sendMessage(msg.chat.id, "Siz " + msg.from.first_name + "siz");
});
bot.on('message',(msg)=>{
  var startMsg = "/start@muhammadsiddiq_robot";
  if (msg.text.toString().toLowerCase().indexOf(startMsg) === 0) {
  bot.sendMessage(msg.chat.id,"Eee men eng yomon botmanu nega start bosding");
  }
});
bot.on('message', (msg) => {

  var id = "id";
  if (msg.text.toString().toLowerCase().includes(id)) {
    bot.sendMessage(msg.chat.id, "manavi id mi: " + msg.chat.id);
  }

});
bot.on('message',(msg)=>{
  var Ishla = "ishla";
  if (msg.text.toString().toLowerCase().indexOf(Ishla) === 0) {
  bot.sendMessage(msg.chat.id,"ishlavomman bratan o'kirmen");
  }
});

bot.on('message',(msg)=>{
  var ahmoq = "ahmoq";
  if(msg.text.toString().toLowerCase().indexOf(ahmoq) === 0){
  bot.sendMessage(msg.chat.id,"ho'p ho'p bo'ldi boshqa qaytarilmidi");
  }
});

bot.on('message',(msg)=>{
  var rasm = 'rasm';
  if(msg.text.toString().toLowerCase().indexOf(rasm)===0){
    bot.sendPhoto(msg.chat.id, "https://adby.io/wp-content/uploads/2020/03/Telegram-Bot-500x625-1.png", {"caption": "ashinga o'xshimanmi"})
  }
});

bot.on('message', (msg) => {

var what1 = "jinni";
if (msg.text.toString().toLowerCase().indexOf(what1)) {
bot.kickChatMember(msg.chat.id,  msg.from.id);
}

});
bot.on('message',(msg)=>{
  var what = 'what';
  if(msg.text.toString().toLowerCase().indexOf(what)===0){
    bot.sendMessage(msg.chat.id, "jinni")
  }
});
bot.on('message',(msg)=>{
  var sokish = 'jalab';
  if(msg.text.includes(sokish)===0){
    bot.kickChatMember(msg.chat.id,  msg.from.id);
  }
});

module.exports = bot;
