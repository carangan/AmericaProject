const express = require('express');
const app = express();

app.get('/api/customers/', (req, res) => {
  const customers = [
    {
      id: 1,
      firstName: "Janiel",
      lastName: "Calamari"
    },
    {
      id: 2,
      firstName: "Jay",
      lastName: "with a G"
    },
    {
      id: 3,
      firstName: "Ramon",
      lastName: "Martinez"
    }
  ];

  res.json(customers);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // console.log(`Server on port ${port}`);
});
