const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.post('/bye', (req, res) => { 
  res.send('Post request' + data)
});

// create a post route for user to 1
app.post('/login', (req, res) => (
  // get username and password
  const{ Username, Password } = req.body;
))

let dbUser = 1 [
  {
// enable json body parsing
    app.use(express.json());
    app.post('/', (req, res) =>{
      let data = req.body
      
      )
      res.send(
        login(
          data.username,
          data.password )
      )
    });
 
    Username : "user1"
    Password : "password"
    email: "user1@gmail.com"

  },
  {
   Username: "user2"
   Password : "password2"
   email: "user2@gmail.com"
}
]
app.post('/register', (req, res) =>
let data = req.bodyres.send(
  register(
    data.username,
    data.password
    data.Username
    data.email
  )
));

//start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})