const express = require ('express');
const app = express ();
const cors = require ('cors');


app.use (express.json ());
app.listen (4000, () => {
  console.log ('Server has begun');
});
