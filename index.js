TELEGRAM_BOT_TOKEN = '5585475206:AAE1shM5YOTLkL_RpDDGhNTjoxyclLDlqMU';
const TeleBot = require('telebot');
const bot = new TeleBot(TELEGRAM_BOT_TOKEN);



bot.on('/start', (msg) => {
    return bot.sendMessage(msg.from.id, `Salom, ${ msg.from.first_name }! Siz Bizni Botimizga Muvaffaqiyatli Ulandingiz😊 Siz Reklama Bermoqchimisiz🤔 Birinchi Shart Iltimos Agar Web-Saytda Reklama Bermoqchi Bolsangiz /web Tegini Ustiga Bosing. Agar Telegram Kanalda Bolsa /tgram Tegini Ustiga Bosing`);
});



bot.on('/web', (msg) => {
    return bot.sendMessage(msg.from.id, `⚡⚡⚡Eslatib O'tamiz Web-Saytda Reklama Pullik💰 Lekin Arzon. Narxlarni Bilish Uchun /Narxlar Tegini Ustiga Bosing! 👮🏻Admin Aloqaga Chiqguncha👐🏻 Registratsiyadan O'tishingiz Mumkin🤝🏻. Registratsiyadan O'tish Uchun /Registratsiyaweb Tegini Ustiga Bosing✍🏻!!! `);
});

bot.on('/tgram', (msg) => {
    return bot.sendMessage(msg.from.id, `⚡⚡⚡Eslatib O'tamiz Telegramda Reklama Tekin🆓. 👮🏻Admin Aloqaga Chiqguncha👐🏻 Registratsiyadan O'tishingiz Mumkin🤝🏻. Registratsiyadan O'tish Uchun /Registratsiyatgram Tegini Ustiga Bosing✍🏻!!!`);
});


bot.on('/web', (msg) => {
    return bot.sendMessage(msg.from.id, `Siz Web-Saytda📰 Reklama Berishni Tanladingiz ✍🏻 Admin Hozir Oflayn!!! Bir Necha Soatlarda Onlayn Boladi!!! 👦🏻${ msg.from.first_name } Agar Siz Kuta OLmasangiz.... 👇🏻👇🏻👇🏻`);
});


bot.on('/tgram', (msg) => {
    return bot.sendMessage(msg.from.id, `Siz Telegramda✉️ Reklama Berishni Tanladingiz ✍🏻 Admin Hozir Oflayn!!! Bir Necha Soatlarda Onlayn Boladi!!! 👦🏻${ msg.from.first_name } Agar Siz Kuta OLmasangiz.... 👇🏻👇🏻👇🏻`);
});




bot.on('/Registratsiyaweb', (msg) => {
    return bot.sendMessage(msg.from.id, `🖋️Nickname _______

    🏷️Level __
    
    🥷🏻Naborlar ___
    
    🎩Bosh Kiyimlar ___
    
    🔫Evo qurollar __
    
    🔫Oddiy Qurollar __
    
    👩🏼‍🤝‍👨🏾Odamlar ___
    
    🦅Master Unvonlari __
    
    ⚜️Elite Pass ___
    
    🕺🏻Emotsiyalar ___
    
    🧱Devorlar turlari ___
    
    👍🏻Like ____
    
    🔐______ Orqali Akkount Yaratilgan
    
    💰Narxi _____`);
});


bot.on('/Registratsiyaweb', (msg) => {
    return bot.sendMessage(msg.from.id, `Account Shop Anketasidagi Past Chiziqchalarni "___" To'ldiring👇🏻 Va Profilingizni 1ta Eng Yoqtirgan Screenshot Rasmini Bizga Yuboring📩 Songgi Shart Bot Admini Onlayn Bo'lguncha Kuting...`);
});



bot.on('/Registratsiyatgram', (msg) => {
    return bot.sendMessage(msg.from.id, `🖋️Nickname _______

    🏷️Level __
    
    🥷🏻Naborlar ___
    
    🎩Bosh Kiyimlar ___
    
    🔫Evo qurollar __
    
    🔫Oddiy Qurollar __
    
    👩🏼‍🤝‍👨🏾Odamlar ___
    
    🦅Master Unvonlari __
    
    ⚜️Elite Pass ___
    
    🕺🏻Emotsiyalar ___
    
    🧱Devorlar turlari ___
    
    👍🏻Like ____
    
    🔐______ Orqali Akkount Yaratilgan
    
    💰Narxi _____`);
});


bot.on('/Registratsiyatgram', (msg) => {
    return bot.sendMessage(msg.from.id, `Account Shop Anketasidagi Past Chiziqchalarni "___" To'ldiring👇🏻 Va Profilingizni 1ta Eng Yoqtirgan Screenshot Rasmini Bizga Yuboring📩`);
});


bot.on('/Narxlar', (msg) => {
    return bot.sendMessage(msg.from.id, `   💰Oddiy 1 Oylik Paketini Narxi - 5000 So'm.
    💰Premium 1 Oylik Paketini Narxi - 10000 So'm.
    💰Oddiy 3 Oylik Paketini Narxi - 15000 So'm.
    💰Premium 3 Oylik Paketini Narxi - 25000 So'm.
    💰Oddiy Sotilguncha Paketini Narxi - 10000 So'm.
    💰Premium Sotilguncha Paketini Narxi - 20000 So'm.
    
    
    💰Oddiy 1 Oylik Paketi Haqida - Bu Paketda Siz 1 Oyga Joy Buyurtma Qilgan Bo'lasiz Va Siz 1ta Akkouningizni Reklamaga Qo'ya Olasiz. Agar Akkaunt Shu Oylik Paket Muddatida Sotilib Ketsa, Yana Qolgan Vaqtga Boshqa Akkaunt Qo'yish Huquqiga Ega Emassiz.
    
    💰Premium 1 Oylik Paketi Haqida - Bu Paketda Siz 2 Oyga Joy Buyurtma Qilgan Bo'lasiz Va Siz 1ta Akkouningizni Reklamaga Qo'ya Olasiz. Agar Akkaunt Shu Oylik Paket Muddatida Sotilib Ketsa, Yana Qolgan Vaqtga Boshqa Akkaunt Qo'yish Huquqiga Egasiz.(Majburiy Emas)
    
    💰Oddiy 3 Oylik Paketi Haqida - Bu Paketda Siz 2 Oyga Joy Buyurtma Qilgan Bo'lasiz, Va Siz 1ta Akkouningizni Reklamaga Qo'ya Olasiz. Agar Akkaunt Shu Oylik Paket Muddatida Sotilib Ketsa, Yana Qolgan Vaqtga Boshqa Akkaunt Qo'yish Huquqiga Ega Emassiz.
    
    💰Premium 3 Oylik Paketi Haqida - Bu Paketda Siz 2 Oyga Joy Buyurtma Qilgan Bo'lasiz, Qulay Jihati Shundaki Sizni Akkountingiz Web-Saytni Eng Bosh Qismida (Yani Tavsiya Qismida) Turadi Va Siz 2ta Akkouningizni Reklamaga Qo'ya Olasiz (Birdaniga Emas). Agar 1ta Akkaunt Shu Oylik Paket Muddatida Sotilib Ketsa, Yana Qolgan Vaqtga 2-Akkaunt Qo'yish Huquqiga Egasiz. (Majburiy Emas)
    
    💰Oddiy Sotulguncha Paketi Haqida - Bu Paketda Siz cheksiz Joy Buyurtma Qilgan Bo'lasiz Va Siz 1ta Akkouningizni Reklamaga Qo'ya Olasiz. Akkaunt Sotilib Ketsa Siz Boshqa Akkaunt Qo'yish Huquqiga Ega Emassiz. 
    
    💰Premium Sotulguncha Paketi Haqida - Bu Paketda Siz Cheksiz Oyga Joy Buyurtma Qilgan Bo'lasiz, Qulay Jihati Shundaki Sizni Akkountingiz Web-Saytni Eng Bosh Qismida (Yani Tavsiya Qismida) Turadi, Siz 3ta Akkouningizni Reklamaga Qo'ya Olasiz (Birdaniga Emas). Agar Akkaunt Shu 1ta Akkaunt Shu Cheksiz Oylik Paket Muddatida Sotilib Ketsa, Yana Qolgan Vaqtga Boshqa 2ta Akkauntingizni Qo'yish Huquqiga Egasiz. (Majburiy Emas)`);
});


bot.start();