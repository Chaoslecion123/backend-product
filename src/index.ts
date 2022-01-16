import app from './app';
import {connectDB} from './db';
//import {PORT} from './config';

async function main(){
    try {
        await connectDB()
        app.listen(4000)
        console.log('listening on port',4000)
    } catch (error) {
        console.log(error)
    }
   
}

main()