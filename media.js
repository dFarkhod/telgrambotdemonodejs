const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const fs = require('fs')
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

// fayldan o'qish:
bot.command('otloq', (ctx) => ctx.replyWithPhoto({ source: 'media/otloq.jpg' }));
bot.command('bali', (ctx) => ctx.replyWithPhoto({ source: 'media/bali.jpg' }));
bot.command('ormon', (ctx) => ctx.replyWithPhoto({ source: 'media/ormon.jpg' }));

// faylni stream yordamida o'qish:
bot.command('qish', (ctx) => ctx.replyWithPhoto({ source: fs.createReadStream('media/qish.jpg') }));

// internetdan ixtiyoriy fayl izlab topish:
bot.command('boshqa', (ctx) => ctx.replyWithPhoto('https://picsum.photos/200/300/?random'));

// rasmga sarlavha qo'shib javob berish:
bot.command('orol', (ctx) => ctx.replyWithPhoto(
    { source: 'media/orol.jpg' },
  Extra.caption('Dengiz, orol, va *baliqchalar*').markdown()
));

// animatsiya bilan javob qaytarish:
bot.command('tabassum', (ctx) => ctx.replyWithAnimation( {source: 'media/smile.gif' }));

bot.launch();