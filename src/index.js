const { GitRevisionPlugin } = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
export default api => {
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
  const isUmi4 = typeof api.modifyAppData === 'function'
  const configFn = isUmi4 ? api.modifyWebpackConfig : api.chainWebpack
  configFn((config, { webpack }) => {
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
