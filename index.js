const Discord = require('discord.js');

const config = require('./config.json');

const intents = new Discord.Intents(32767); // This is in discord.js v13. This defines ALL Intents

const Gamedig = require('gamedig');

const prefix = (config.prefix);

const fivereborn = require('fivereborn-query');

//status changing
client.on('ready', async () => {
  setInterval(async() => { // Defines the function
    fivereborn.query(config.SERVER_IP,config.SERVER_PORT, (err, data) => { // Starts a function that allows us to retrieve data from our fivem server from our config.json file
      if (err) { // Checks for errors
        return console.log(err); // If a error is true then this will log that error and then stop it from going by
      } else { // If a error is not true then 
        client.user.setActivity(`${data.clients} Members!`, { type: "WATCHING" }); // Sets the Status
      }
    });
  }, 10000); // Changes every 10 seconds
})
