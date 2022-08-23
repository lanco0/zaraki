const { MessageEmbed, Permissions } = require("discord.js");
const config = require("../../Configs/serverConfig");
const emojiConfig = require("../../Configs/emojiConfig");

module.exports.run = async (bot, message, args) => {
  if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))
    return message
      .reply({
        content: `> ${emojiConfig.başarısız} **Başarısız!** Bu komutu kullanman için **Yönetici** yetkisine sahip olman gerekiyor!`,
        allowedMentions: { repliedUser: false },
      })
      .catch((err) => {});

  let embed = new MessageEmbed()
    .setDescription(
      `DR Hogwarts Roleplay Giriş bilgilerimiz ;

* Sunucu Bilgileri *

* Sunucu İP Adresi: 
* TeamSpeak 3 Adresi: 
* Tıkla ve Bağlan! 

Sunucumuz aktif ve roller başlıyor herkesi bekliyoruz ❤️ `
    )
    .setImage("")
    .setColor("RANDOM");

  message.channel.send({ embeds: [embed] });
};
module.exports.conf = {
  name: "aktif",
  aliases: [],
};
