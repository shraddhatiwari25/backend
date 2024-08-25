const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = null;

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase() && (highestLowercaseAlphabet === null || item > highestLowercaseAlphabet)) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: "shraddha_tiwari_25062002",  // Replace with actual format
        email: "shraddha256tiwari@gmail.com",
        roll_number: "21BCE10259",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});


app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});
