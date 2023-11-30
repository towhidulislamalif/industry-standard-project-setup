import path from 'path'
import dotenv from 'dotenv'
// Load environment variables from a .env file
dotenv.config({ path: path.join(process.cwd(), '.env') })

const config = {
  port: process.env.PORT || 5000,

  mongodbUrl: process.env.MONGODB_URL,
}

export default config
