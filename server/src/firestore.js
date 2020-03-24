const admin = require('firebase-admin')
const parser = require('ua-parser-js')
const uuid = require('uuid/v4')

const VIEW_COLLECTION_NAME = 'web-views'
const BOOKMARK_COLLECTION_NAME = 'web-bookmarks'

/**
 * Firestore connection, authorized with service account
 */
admin.initializeApp({
  credential: admin.credential.applicationDefault()
})
const db = admin.firestore()

/**
 * Query Firestore for previous 30 days of views, sorted and w/aggregates
 */
async function getViews () {
  const date = new Date()
  date.setDate(date.getDate() - 30)

  const snapshot = await db.collection(VIEW_COLLECTION_NAME)
    .where('timestamp', '>', date)
    .orderBy('timestamp', 'desc')
    .get()

  const views = snapshot.docs.map(doc => {
    const payload = doc.data()
    const userAgentData = parser(payload.userAgent)
    return {
      id: doc.id,
      timestamp: payload.timestamp._seconds,
      pathname: payload.pathname,
      referrer: payload.referrer || '',
      userAgent: payload.userAgent,
      windowInnerWidth: payload.windowInnerWidth,
      timezone: payload.timezone,
      hostname: payload.hostname,
      browserName: userAgentData.browser.name || '',
      engineName: userAgentData.engine.name || '',
      osName: userAgentData.os.name || '',
      deviceVendor: userAgentData.device.vendor || ''
    }
  })

  const aggregates = {
    total: views.length
  }

  return {
    aggregates,
    views
  }
}

/**
 * Add new bookmark to Firestore
 */
async function postBookmark (payload) {
  const docRef = db.collection(BOOKMARK_COLLECTION_NAME).doc(uuid())
  docRef.set(payload)
}

module.exports = {
  getViews,
  postBookmark
}
