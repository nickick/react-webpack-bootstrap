// Runs standard only on files staged for changes through git.
const git = require('simple-git')('./')
const standard = require('standard')
const _ = require('lodash')

git.diff(['--staged', '--name-only'], (err, res) => {
  if (err) throw err
  const changedFileNames = _.filter(res.split(/\n/), (fileName) => {
    return fileName && fileName.match(/\.js$/)
  })

  standard.lintFiles(changedFileNames, (err, res) => {
    if (err) {
      process.stdout.write(err.message)
      process.exit(1)
    }

    _.each(res.results, (result) => {
      process.stdout.write(`${result.filePath}`)
      _.each(result.messages, (message) => {
        process.stdout.write(`${result.filePath}:${message.line}:${message.column}: ${message.message} \n`)
      })
    })

    process.stdout.write('\n')
    const code = res.errorCount > 0 ? 1 : 0
    process.exit(code)
  })
})
