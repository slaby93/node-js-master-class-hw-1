const http = require('http')
const url = require('url')

const PORT = 3000

http
  .createServer((req, res) => {
    const parsedUrl = url.parse(req.url).pathname.trim()
    const { code, output } = router(req, res, { parsedUrl })

    res.statusCode = code
    res.end(output)
    console.log(`Server responded with status ${res.statusCode} and output: ${output}`);
  })
  .listen(PORT, () => console.log(`Server started on port ${PORT}`))

const router = (req, res, { parsedUrl }) => {
  switch (parsedUrl) {
    case '/hello':
      res.setHeader('Content-type', 'application/json')
      return { code: 200, output: JSON.stringify({ message: 'Hi Pirple!' }) }
      break
    default:
      return { code: 404, output: 'Not found!' }
  }

}