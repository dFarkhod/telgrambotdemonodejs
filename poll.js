const Telegraf = require('telegraf');
const { Extra, Markup } = Telegraf;
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Buyruqlar: /sorov /savol'));

bot.command('sorov', (ctx) =>
  ctx.replyWithPoll(
    'Quyidagilardan qaysi biri sog\'liq uchun zararli?',
    ['suv', 'olma', 'kola', 'non', 'baliq'],
    { is_anonymous: false }
  )
);
bot.command('savol', (ctx) =>
  ctx.replyWithQuiz(
    'Payg\'ambarimiz Muhammad (S.A.V) qaysi shaharda vafot etganlar?',
    ['Makka', 'Madina', 'Toif', 'Quddus', 'Samarqand'],
    { correct_option_id: 1 }
  )
);

bot.launch();