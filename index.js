import express from 'express';
import axios from 'axios';
const app = express()
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/pr-count", async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/repos/lodash/lodash/pulls')
        res.send(`Current lodash pull request count is ${response.data.length}`)
    } catch (error) {
        res.status(500).send("Error fetching pull requests")
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})