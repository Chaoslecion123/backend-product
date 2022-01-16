import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import { schema } from './schema';
const cors = require('cors');

const app = express();

app.use(cors())


app.use('/graphql',graphqlHTTP({
    graphiql: true,
    schema
}))

export default app;