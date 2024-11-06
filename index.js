const express = require('express') // express 모듈을 가져옴
const app = express() // express 함수를 가지고 앱을 만듬
const port = 4000 // 포트 설정

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})