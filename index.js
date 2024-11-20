const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {  
    res.sendFile(__dirname + '/index.html')
});

app.get('/style.css', (req, res) => {  
    res.sendFile(__dirname + '/style.css')
});

app.get('/cal.html', (req, res) => {  
  res.sendFile(__dirname + '/cal.html')
});


app.get('/maps.html', (req, res) => {  
  res.sendFile(__dirname + '/maps.html')
});

app.get('/pros.html', (req, res) => {  
  res.sendFile(__dirname + '/pros.html')
});

app.get('/ld.html', (req, res) => {  
  res.sendFile(__dirname + '/ld.html')
});

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000")
});