const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
const dotenv = require('dotenv');
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use(Telegraf.log());

bot.command('start', (ctx) => {
    return ctx.replyWithHTML('Assalomu alaykum, <b>' + ctx.message.from.first_name +'</b>', Extra.markup(
      Markup.inlineKeyboard([Markup.callbackButton('Vaaleykum salom', 'ws')])
    ))
  });

  bot.action('ws', (ctx) => {
  ctx.reply('<i>Ahvolingiz qalay?</i>',
    Extra.HTML()
    .markup(Markup.inlineKeyboard([
        Markup.callbackButton('A\'lo', 'hamd'),
        Markup.callbackButton('Yaxshi', 'all-right'),
        Markup.callbackButton('Yomon emas', 'not-bad'),
        Markup.callbackButton('Yomon', 'dont-ask')
    ])))
});
  
bot.action('dont-ask', (ctx) => {
    return ctx.answerCbQuery(`Hop bo'ladi!`)
  });

bot.action('not-bad', (ctx) => {
  ctx.reply('<i>Kuningiz yaxshi o\'tsin 😊</i>',
    Extra.HTML())
});
bot.action('all-right', (ctx) => {
    ctx.reply('<i>Undan ham yaxshi bo\'lsin 😊</i>',
      Extra.HTML())
  });
bot.action('hamd', (ctx) => {
  ctx.reply('Xursandman. Buyurtma berish uchun quyidagi tugmalardan birini bosing',
  Markup
  .keyboard([
    ['🥣 Suyuq', '🧆 Quyuq'],
    ['🥗 Salat', '🍹 Ichimlik'],
    ['🍰 Shirinlik', '🍎 Meva']
  ])
  .oneTime()
  .resize()
  .extra()
)
});

bot.hears('🍎 Meva', (ctx) => {
    ctx.reply('Meva tanlang',
  Markup
  .keyboard([
    ['🍉 Tarvuz', '🍌 Banan'],
    ['🥭 Mango', '🍐 Nok'],
    ['🍓 Qulpnay', '🍎 Olma']
  ])
  .oneTime()
  .resize()
  .extra()
)
});


bot.command('keyboard', ({ reply }) => {
  return reply('Har hil tugmalar', Markup
    .keyboard([
      ['🔍 Izlash', '😎 Ommabop'], // 1chi qator 2ta tugma
      ['☸ Sozlamalar', '📞 Bog\'lanish'], // 2chi qator 2ta tugma
      ['📢 E\'lonlar', '⭐️ Bizni baholang', '👥 Ulashish'] // 3chi qator 3ta tugma
    ])
    .oneTime()
    .resize()
    .extra()
  )
});



bot.launch()
