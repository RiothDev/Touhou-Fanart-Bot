import { Message, GatewayIntentBits, EmbedBuilder } from 'discord.js'
import { getImage } from "./get"

const DiscordJS = require("discord.js")
const dotenv = require("dotenv")

dotenv.config()
const prefix = "!"

const client = new DiscordJS.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on("ready", () => {
    console.log("> Bot ready!")
})

client.on(DiscordJS.Events.MessageCreate, async (msg: Message) => {
    if (msg.content.toLocaleLowerCase().startsWith((prefix + "fanart"))) {
        if (msg.author.id != client.user?.id) {
            let img = new getImage()

            const embed = new EmbedBuilder()
                .setColor("Aqua")
                .setTitle("Random touhou fanart")
                .setImage(img.getImage())
                .setTimestamp()

            await msg.channel.send({embeds: [embed]})
        }
    }
})

client.login(process.env.TOKEN)