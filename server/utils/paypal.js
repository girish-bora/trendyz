const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AfUdDSTh-XERPBfiNkRsECvmFDZj9zPn-yM-rLyI48ObOPTwH9Xf36WKbbaPPaHwXh_WbK04dENJcrDh",
  client_secret: "EMS_dB4kO8HP3uY1P1QxozFpZAYuZBrCZkV8QXP4mfGOoxlg8ifEPbB9qbcm85tyeozh92hzgQo73qUM",
});

module.exports = paypal;
