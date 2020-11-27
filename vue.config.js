module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/]
    }
  }
}