import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import router from './routes/index.js'

try {
  // Initialize Express app
  const app = express()

  // Middleware to parse URL-encoded bodies
  const directoryFullName = dirname(fileURLToPath(import.meta.url))

  // Apply ejs layouts, set view engine and static files
  app.set('view engine', 'ejs')
  app.set('views', path.join(directoryFullName, 'views'))
  app.set('layout', path.join(directoryFullName, 'views', 'layouts', 'default'))
  app.set('layout extractScripts', true)
  app.set('layout extractStyles', true)
  app.use(express.static(path.join(directoryFullName, 'public')))
  app.use(expressLayouts())

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
