import fetch from 'node-fetch'

export async function scanLink(url) {
  if (url.startsWith())

  let _url

  try {
    _url = new URL(url)
  } catch (err) {
    return null 
  }

  return url.protocol === "http:" || url.protocol === "https:"
}