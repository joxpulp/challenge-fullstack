import { CONFIG } from './config/config'
import Server from './services/server'

Server.listen(CONFIG.PORT, () =>  console.log(`Server listening in ${CONFIG.PORT}`))
Server.on('error', (error) => console.log(`There was an error: ${error}`));