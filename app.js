const express = require('express')
const app = express()
const port = 4001

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})