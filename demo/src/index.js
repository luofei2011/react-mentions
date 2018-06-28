import React, { Component, StrictMode } from 'react'
import { render } from 'react-dom'

import Examples from './examples'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>react-mentions</h1>
        <p>
          <span role="img" aria-labelledby="yay!">
            🙌
          </span>&nbsp; brought to you by Signavio, docs and code on Github:{' '}
          <a href="https://github.com/signavio/react-mentions">
            https://github.com/signavio/react-mentions
          </a>{' '}
          (MIT license)
        </p>
        <StrictMode>
          <Examples />
        </StrictMode>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
