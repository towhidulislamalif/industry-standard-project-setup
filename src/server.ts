import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

/**
 * Connect to MongoDB using the provided URL.
 * @throws {Error} If connection to MongoDB fails.
 */
async function connectToDatabase() {
  try {
    await mongoose.connect(config.mongodbUrl as string)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
    process.exit(1) // Exit the process on connection failure
  }
}

/**
 * Start the Express server.
 */
function startServer() {
  const PORT = config.port || 3000

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

/**
 * Main function to coordinate the application startup.
 */
async function main() {
  await connectToDatabase()
  startServer()
}

// Run the main function
main().catch((error) => {
  console.error('An unhandled error occurred:', error)
  process.exit(1) // Exit the process on unhandled errors
})
