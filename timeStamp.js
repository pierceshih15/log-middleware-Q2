const moment = require('moment')
const tz = require('moment-timezone')

module.exports = (req, res, next) => {
  req.requestTime = Date.now()
  const timeStamp = moment().tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss')

  res.on('finish', () => {
    const timeConsuming = Date.now() - req.requestTime
    console.log(`${timeStamp} | ${req.method} from ${req.url} | total time: ${timeConsuming}ms`)
  })
  next()
}