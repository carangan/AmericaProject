const express = require('express');
const app = express();

app.get('/api/users/', (req, res) => {
  const users = [
    {
      id: 1,
      name: "Janiel Calamari"
    },
    {
      id: 2,
      name: "Jay with a G"
    },
    {
      id: 3,
      name: "Ramon Martinez"
    }
  ];

  res.json(users);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
