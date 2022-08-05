const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
export default api => {
  const isUmi4 = typeof api.modifyAppData === 'function'
  if (isUmi4) {
    api.describe({
      key: 'gitReversionPlugin',
      config: {
        schema(joi) {
          return joi.string()
        },
        onChange: api.ConfigChangeType.reload,
      },
      enableBy: api.EnableBy.register,
    })
    api.modifyWebpackConfig((config, { webpack }) => {
      if (Array.isArray(config.plugins)) {
        config.plugins = [
          ...config.plugins,
          gitRevisionPlugin,
          new webpack.DefinePlugin({
            __VERSION__: JSON.stringify(gitRevisionPlugin.version()),
            __COMMIT_HASH__: JSON.stringify(gitRevisionPlugin.commithash()),
            __BRANCH__: JSON.stringify(gitRevisionPlugin.branch()),
            __LAST_COMMIT_DATETIME__: JSON.stringify(gitRevisionPlugin.lastcommitdatetime()),
          }),
        ]
      }
      return config
    })
  }
}