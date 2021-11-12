declare global {
  interface ScanningConfiguration {
    nsfw?: Boolean,
    malware?: Boolean
  }

  interface LinkScanningConfiguration {
    raw?: Boolean
  }
}

export {}