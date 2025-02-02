const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/api/hng-task-0', (req, res) => {
    const current_datetime = new Date().toISOString();
    res.status(200).json({ email: 'sherifdeenraji96@gmail.com', current_datetime, github_url: 'https://github.com/TryYourBestAndLeaveTheRest/hng_backend_task_0' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})