
const express = require('express');
const {getAllHobby,getCandidates,getSingleCandidates,getColor,getHobby} = require('./src/candidates')
const app = express();
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
})
app.get('/candidates/id/:candidateId',getSingleCandidates)
app.get('/candidates/color/:color',getColor)
app.get('/candidates/hobby/:myHobby',getHobby)
app.get('/candidates/allHobbies/',getAllHobby)
app.get('/candidates',getCandidates)

app.listen(port, console.log('listening at http://localhost:'+ port))