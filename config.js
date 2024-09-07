'm//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "desmondowusuyeboah14@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Accra";
global.github = process.env.GITHUB || "https://github.com/TechTitan27/Queen_Trudy-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaf5BAMLo4hcw3HYv43x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaf5BAMLo4hcw3HYv43x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/PCzNZSL/2024072119443838.jpg";
global.devs = "233257938281";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "233257938281";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/PCzNZSL/2024072119443838.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5sUjltYjhwbHFCeEtaSWEvcEdlOW5VRmlnZ2VsS2lRNXlEV1dWdTNGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0NhOHUrWnBsaW8yc1dsUkpTYk1TQ0wwMWpRNEpHMXpJcGVydGFkOVVuUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTkFSd0dickxTR1BvUm9vUmRGT1FJREFsMVJOZVdlY3h6emJRVnJNREdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXZU1PeDQzd2ZwRDVxQkRNbWNFWlFVQU1wUFdSd2pkZFp2MmZkQ3Q2N1UwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLdUdCaElsN0NUVmJUUlJVWEtvbkh6cGlNaE5EMWVwR0hhK2tleURJVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9OZ3RFUHFiRUhjUE01MzhMMjhaVFZCS3pGVjcxUjNPYlk1TVA0SjAzRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUVCWkFma053NmhxNXRZcVZYeTR3aDEyZFJyUjZsZ21pNkQ2MUtZeVRuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXhlZnNwN0J0ZmZGSkJZWHBmOWRJdW0xR3BLUTVuUEc5OTIwZGxwTUpBTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVXVzMzS21iTnoxd3RoYldyRnoyOUpnVjVHQTRtMGFWWmQrOHl0bmE3ZnRtTWRCMUVGa2VQMmJjcHNodzZpbERUblNPemJ1RzgvNnB5K0VBaUlKQkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJ4QTFGWFUwRFZxbWZ5MzVYTUFHR3BvNXpPanNrOGN4TW5jSHZYYTFQVk9NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHR0tNN2RIMlRBZTFUdEZvcGZKTDJnIiwicGhvbmVJZCI6ImFkMDEyNDAxLTk1M2YtNDAxMS1iYjAwLWVjZTVkZmRiNDY4NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTUxudy9LalBvSkI5R1hOaFJjcnkxU3VwMkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzlhVURRUCtULzdleTR5aUpiSW1ZYVdFL2VrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJUVzdDUFQ1IiwibWUiOnsiaWQiOiIyNzY1NjQxNTkxMToyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTQElOVEZMT0VXIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNlFzaFlRd0o3enRnWVlDQ0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI5M1BDWE1FT3BsSHl1bVVoeEExbTl4VDZvZEV0cTZoT0RySkpiemxjRHhrPSIsImFjY291bnRTaWduYXR1cmUiOiJRSVdSQjJ6Yk9Yb2J2V1RXM3o4aUxYRmVPTFI5UUVVR3FhN2JZdjBaZGhrK0dHRll3WWxWQXJaZm5IZEdaNTdZOEVidHNPQ01jbk8wbU9lUVBHVzVCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoickNzNmFQTVhMS1JVenU3ZDA2WFNtZ1dKQklYQ0xmUE1nU2FqLzluOXprYnZhSTZtMDIyMElDV0pSR2RCWHQ2amVFdXpnSjF0Zll3SGZ0K2VqSERlQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY1NjQxNTkxMToyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZHp3bHpCRHFaUjhycGxJY1FOWnZjVStxSFJMYXVvVGc2eVNXODVYQThaIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NzQ3MDIyfQ==
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_TRUDY-MD™`",
  author: process.env.PACK_AUTHER || "QUEEN_TRUDY",
  packname: process.env.PACK_NAME || "T R U D Y ™",
  botname: process.env.BOT_NAME || "QUEEN_TRUDY-MD",
  ownername: process.env.OWNER_NAME || "TechTitan27",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
