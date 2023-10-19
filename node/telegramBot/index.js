const { Telegraf } = require('telegraf')


const food_preferences = ["Burger", "Pizza", "Pasta", "Sushi", "Salad", "Tacos", "Curry", "Sushi", "Sandwich", "Stir-Fry"]


const bot = new Telegraf('6525959799:AAFbPC76Zmqg_0c8p01q9I5jK_v6faLbYAM')
bot.start((ctx) => ctx.reply('Welcome to our restaurnt , please choose your food Preferences you command like (/food_preferences)'))
bot.command('food_preferences',(ctx)=>ctx.reply(food_preferences))

bot.command('hello', (ctx) => ctx.reply('Welcome '))

bot.launch()
