import React from 'react'
import { render } from 'react-dom'
import 'normalize.css/normalize.css'
import './global.css'

import Router from 'router'

const entryNode = document.getElementById('app')
render(<Router />, entryNode)
