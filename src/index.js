import React from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './global.css'

import App from 'components/app'

const entryNode = document.getElementById('app')
render(<App />, entryNode)
