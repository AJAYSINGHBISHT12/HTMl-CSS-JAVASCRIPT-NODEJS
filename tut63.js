const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>More on selectors</title>
  </head>
  <style>
      h1{
          background-color: red;
          color: black;
          font-weight: bold;
          text-align: center;
      }
  
      /* if p is contained by any li which is contained by div */
      /* div li p{
          color: yellow;
          background-color: green;
          font-weight: bold;
      } */
  
      /* if p is right inside div then this CSS will be applied */
      /* div > p{
          color: yellow;
          background-color: green;
          font-weight: bold;
      } */
  
      /* if p is right after div i.e p is the next sibling of div*/
      /* div + p{
          color: white;
          background-color: rgb(238, 137, 137);
      } */
  
  </style>
  <body>
      <h1>This is more on selectors</h1>
      <div class="container">
          <div class="row">
              <ul>
                  <li class="item"><p> this is another paragraph inside li</p></li> 
                  <li>this will not get affected</li>
                  <p>this is a para inside ul</p>
              </ul>
              <p>This is a paragraph</p>
          </div>
          <p>This is another paragraph</p>
      </div>
      <p>this is outermost paragraph</p>
  </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});