const { VoiceConnection, AudioPlayer } = require("@discordjs/voice");
const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
    id: {type: String, required: true},
    connection: {type: VoiceConnection, required: true},
    player: {type: AudioPlayer, required: true},
    queue: {type: Array, required: true}
});

const Guild = mongoose.model("GuildSchema", guildSchema);
module.exports = Guild;