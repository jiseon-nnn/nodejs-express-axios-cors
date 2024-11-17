// server.js
const express = require('express');
const cors = require('cors')

//서버 실행
const app = express()

//cors 설정
app.use(cors({
  origin: "http://127.0.0.1:9000",
  methods: ['OPTIONS', 'POST', 'GET', 'PUT', 'DELETE'],
}))

app.use(express.json())
app.use(express.text())

let data = { message: '여러분 화이팅!' };

app.options('/', (req, res) => {
  return {
    res.writeHead(204, headers);
    res.send()}
})

app.get('/', (req, res) => {
  return res.json(data)
})


app.post('/', (req, res) => {
  data.message = req.body
})
  if (req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      data.message = body;
      res.writeHead(200, headers);
      res.end(`받은 POST 데이터: ${body}`);
    });
  }

  if (req.method === 'PUT') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      data.message = body;
      res.writeHead(200, headers);
      res.end(`업데이트된 데이터: ${body}`);
    });
  }

  if (req.method === 'DELETE') {
    data = {};
    res.writeHead(200, headers);
    res.end('데이터가 삭제되었습니다.');
  }


server.listen(3000, () => {
  console.log('서버가 http://localhost:3000/ 에서 실행 중입니다.');
});
