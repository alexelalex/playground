/* eslint-disable no-restricted-globals */
self.addEventListener('push', function (event) {
  const data = event.data.json()
  self.registration.showNotification(data.title, {
    icon: '/logo192.png',
    title: data.title,
    body: data.body,
    data,
  })
})

self.addEventListener('notificationclick', event => {
  const { url } = event.notification.data || {}
  if (url) {
    event.waitUntil(self.clients.openWindow(url))
  }
  event.notification.close()
})
