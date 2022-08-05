import { useState } from 'react'

const index = () => {
  return (
    <div>
      <h1>Page index</h1>
      <div>__VERSION__: {__VERSION__}</div>
      <div>__COMMIT_HASH__: {__COMMIT_HASH__}</div>
      <div>__BRANCH__: {__BRANCH__}</div>
      <div>__LAST_COMMIT_DATETIME__: {__LAST_COMMIT_DATETIME__}</div>
    </div>
  )
}

export default index
