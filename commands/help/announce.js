const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "announce",
  category: "misc",
  usage: "announce [channel] [message]",
  description: "Send an announcement using Spark.",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`You need the \`Administration\` permission to send an announcement.`)
    await message.delete()
    let msg = args.slice(1).join(" ")
    //let channel = args.slice(0).join(" ")
    if (!msg) return message.channel.send("Announcements cannot be blank. Please try again")
    let announcement = new MessageEmbed()
      .setTitle("Server Announcement")
      .setDescription(`${msg}`)
      .setColor("#5865F2")
    message.channel.send(announcement)
  }
}