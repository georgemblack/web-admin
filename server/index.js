const admin = require('firebase-admin')
const express = require('express')
const parser = require('ua-parser-js')

// Firestore connection
admin.initializeApp({
  credential: admin.credential.applicationDefault()
})
const db = admin.firestore()

// Express
const app = express()
app.use(express.json())
const port = process.env.PORT || 8080

app.use(express.static('public'))

app.get('/api/views', (req, res) => {
  res.header('Content-Type', 'application/json')

  const data = []

  db.collection('personal-web-views').get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const documentId = doc.id
        const documentPayload = doc.data()
        const userAgentData = parser(documentPayload.userAgent)

        data.push({
          id: documentId,
          timestamp: documentPayload.timestamp,
          pathname: documentPayload.pathname,
          referrer: documentPayload.referrer || '',
          windowInnerWidth: documentPayload.windowInnerWidth,
          timezone: documentPayload.timezone,
          hostname: documentPayload.hostname,
          browserName: userAgentData.browser.name || '',
          engineName: userAgentData.engine.name || '',
          osName: userAgentData.os.name || '',
          deviceVendor: userAgentData.device.vendor || ''
        })
      })
      data.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
      res.status(200).send({ data: data })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Internal error')
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
