import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6288229683561', 'YukiSmall', true],
  ['62882296835613', 'Hoshiyuki-Bot', true],
  ['6287708773367', 'AmmarBN', true]
] // nomor owner

global.mods = ['6288229683561'] 
global.prems = ['6288229683561', '6287708773367']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  lann: 'https://api.betabotz.eu.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.betabotz.eu.org': 'Hoshiyuki',
  'https://hoshiyuki-api.my.id': 'Hoshiyuki'
}

// daftar di sini https://api.betabotz.eu.org
global.lann = 'Hoshiyuki'

// setting limit user
global.limit = 69

// Sticker WM
global.packname = 'Hoshiyuki-Bot' 
global.author = '@AmmarBN' 
//--info NS [ NANS ]
global.NSnama = 'Hoshiyuki-Bot MD'
global.NSig = 'https://www.instagram.com/ammarbn27' 
global.NSgc = 'https://whatsapp.com/channel/0029VaWNXqF8fewpBpaCiQ1K'
global.NSthumb = 'https://i.ibb.co/vPmpMLW/20230919-175841.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.eror = 'Error, Kesalahan tidak terduga'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // max warning

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
