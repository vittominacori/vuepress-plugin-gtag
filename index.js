const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const gtagId = options.gtagId || siteConfig.gtagId
    const TAG_ID = gtagId || false
    return { TAG_ID }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
