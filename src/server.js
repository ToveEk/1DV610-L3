/**
 * Server setup and configuration.
 *
 * @module server
 * @author Tove Ek
 * @version 1.0.0
 */

import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { router } from './routes/router.js'
import { setBaseURL } from './middleware/setBaseURL.js'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

try {
  // Initialize Express app
  const app = express()

  // Set base URL
  const baseURL = process.env.BASE_URL || '/'
  console.log(`Base URL: ${baseURL}`)
  app.use(setBaseURL(baseURL))

  // Middleware to parse URL-encoded bodies
  const directoryFullName = dirname(fileURLToPath(import.meta.url))
  app.use(express.urlencoded({ extended: true }))

  // Apply ejs layouts, set view engine and static files
  app.set('view engine', 'ejs')
  app.set('views', path.join(directoryFullName, 'views'))
  app.set('layout', path.join(directoryFullName, 'views', 'layouts', 'default'))
  app.set('layout extractScripts', true)
  app.set('layout extractStyles', true)
  app.use(express.static('public'))
  app.use(expressLayouts)

  // Set up routes
  app.use('/', router)

  // Start the server
  const PORT = process.env.PORT || 3000

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    console.log('Press Ctrl+C to stop the server')
  })
} catch (error) {
  console.error('Error starting server:', error)
  process.exit(1)
}
