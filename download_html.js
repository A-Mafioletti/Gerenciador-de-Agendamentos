const https = require('https');
const fs = require('fs');

const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzIyZGUwMzc0ZTNjZjQzMTU4MDRkNmNmYzIwYjkzMDljEgsSBxD_o4DZyhAYAZIBIwoKcHJvamVjdF9pZBIVQhM2MzQyMDExODU2MjgxMzQ3NzM2&filename=&opi=89354086";

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('booking.html', data);
    console.log('Downloaded booking.html');
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
