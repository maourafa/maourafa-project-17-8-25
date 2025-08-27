const fs = require('fs');
const chalk = require('chalk');

global.botName = '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼'; // Nama Bot Kamu
global.ownerNumber = '6282278687542'; // Nomor Kamu
global.ownerName = '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉-𝙏𝙐𝙉𝙉𝙀𝙇 𝙋𝙍𝙀𝙈𝙄𝙐𝙈'; // Nama Kamu
global.website = 'https://list.maourafavpn.my.id'; // Web Kamu
global.wagc = 'https://list.maourafavpn.my.id'; // Web Kamu

global.packname = botName; // Nama Pack
global.author = ownerName; // Nama Author
global.footer = '© maoudev';
global.creator = '6282278687542@s.whatsapp.net'; // Nomor Creator
global.premium = ['6282278687542']; // User Premium
global.prefa = '#'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363328148463101@newsletter'; // ID Saluran Kamu
global.saluranName = '𝙈𝘼𝙊𝙐𝙍𝘼𝙁𝘼 𝙑𝙋𝙉'; // Nama Saluran Kamu
global.sessionName = 'session'; // Nama Folder Sesi Bot Kamu

global.panel = 'https://control.optikservers.com'; // Link Panel Kamu
global.cred = 'ptla_aPkBJgJLb5Af29zPTI6FwicgPV8Bw9kuuiTLxp6WEq5'; // API PTLA Kamu
global.apiuser = 'ptlc_XZ8jqmbIbeNLmY8GS3DLdgBmErMlj4Cb36OWno0SAuT'; // API PTLC Kamu
global.eggs = '15'; // Eggs Number (Recommended)
global.nets = '5'; // Nets Number (Recommended)
global.location = '1'; // Location Number (Recommended)

global.CF_API_KEY = "KGGRRGbLDNT7N-jDi7JUW4hHregvHQvm8o4ORYZ_"; // Apikey CF Kamu
global.CF_ZONE_ID = "b9883610d0c1ecf9c83f002897822971"; // Zone ID CF Kamu
global.CF_DOMAIN = "optikservers.com"; // Nama Domain Kamu di CF

global.typemenu = 'v14'; // Gaya Menu v1-v5
global.typereply = 'v4'; // Gaya Reply v1-v4
global.autoblocknumber = '62'; // Auto Block Number
global.antiforeignnumber = '62'; // Anti Foreign Number
global.welcome = false // Auto Welcome Msg
global.anticall = false // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = false // Admin Event Msg
global.groupevent = false // Group Event Msg
global.notifRegister = false // Notif Register
global.onlyRegister = false // Hanya Pendaftar
global.autoJoinNewsletter = false // 
global.autoJoin = true             // true = aktif, false = mati
global.minMember = 270            // minimal member biar join
global.joinDelay = 10 * 60 * 1000   // 5 menit (ms)
global.autoJoinNotify = false        // true = notif ke owner, false = silent total
global.notifyEvery = 10              // kirim notif setiap 5 kali join
if (typeof global._lastJoinTs === 'undefined') global._lastJoinTs = 1;

global.payment = {
	dana: "087895338730",
	gopay: "❌",
	ovo: "❌",
	qris: "https://raw.githubusercontent.com/maourafa/listvpnmaourafa/refs/heads/main/Qris.jpg",
	shopeePay: "085789987714",
	seabank: "❌"
};

global.limit = {
	free: 20, // Limit User Non-premium
	premium: 1000, // Limit User Premium
	vip: "VIP" // Limit User VIP 👑
};

global.uang = {
	free: 1000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 1000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: "Fitur ini khusus buat admin aja ya, Kak! ",
	botAdmin: "aku harus jadi admin dulu biar bisa jalanin ini! 😭",
	done: "nih woi 😈",
	error: "Eh, ada yang salah nih... coba lagi ya, Kak!",
	group: "Eits, fitur ini cuma bisa dipakai di grup~ 🫡",
	limit: "Yah, limit penggunaan kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit, atau upgrade ke premium untuk mendapat limit banyak dan akses ke fitur spesial! ✨",
	nsfw: "Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣",
	owner: "Hanya pemilik yang bisa akses fitur ini, Kak! 👑",
	premium: "Fitur ini cuma buat pengguna premium, Kak! 🌟",
	private: "Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌",
	wait: "Tunggu sebentar ya, Kak... aku lagi proses nih! ⏳🤗"
};

global.imageDonasi = "https://raw.githubusercontent.com/maourafa/listvpnmaourafa/refs/heads/main/Qris.jpg"; // Url Image Donasi (dana, qris etc..)
global.imageUrl = "https://raw.githubusercontent.com/maourafa/listvpnmaourafa/refs/heads/main/android-chrome-512x512.png"; // Url Image
global.imageBuffer = fs.readFileSync("./media/imageBuffer.png"); // Buffer Image
global.videoBuffer = fs.readFileSync("./media/videoBuffer.mp4"); // Buffer Video
global.audioBuffer = fs.readFileSync("./media/audioBuffer.mp3"); // Buffer Audio
global.vidHd = fs.readFileSync("./media/sw.mp4"); // sw
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
