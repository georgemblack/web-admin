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

  const aggregates = {}
  const views = []

  const date = new Date()
  date.setDate(date.getDate() - 30) // Previous 30 days

  // Query Firestore for 30 days of views
  db.collection('personal-web-views')
    .where('timestamp', '>', date)
    .orderBy('timestamp', 'desc')
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const documentId = doc.id
        const documentPayload = doc.data()
        const userAgentData = parser(documentPayload.userAgent)

        // Add view to list
        views.push({
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

        // Build aggregates
        aggregates = {
          total: views.length
        }
      })
      res.status(200).send({
        aggregates,
        views 
      })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Internal error')
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`))
