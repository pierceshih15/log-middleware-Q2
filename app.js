const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan');
const moment = require('moment-timezone');

morgan.token('date', (req, res, tz) => {
  return moment().tz(tz).format('YYYY-MM-DD HH:mm:ss');
})

morgan.format('myformatRequest', ':date[Asia/Taipei] | :method from :url');
morgan.format('myformatResponse', ':date[Asia/Taipei] | :method from :url | total time: :response-time ms');

app.use(morgan('myformatRequest'));
app.use(morgan('myformatResponse'));

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})