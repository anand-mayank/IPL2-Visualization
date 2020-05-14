const express = require('express');
const app = express();
const input_year = require('./BowlersEconomyIPL.json');

app.use(express.static("public"));

app.get('/economy', (req, res) => {
    let season = req.query.year;
    console.log(season);
    const data = input_year.BowlersEconomyIPL[season];

    res.send(data);
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is Connected Successfully !!!`)
})
