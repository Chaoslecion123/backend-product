import {GraphQLSchema,GraphQLObjectType} from 'graphql';
import { CREATE_PRODUCT } from './Mutations/Product';
import { GREETING } from './Queries/Greeting';
import { GET_ALL_PRODUCTS, GET_DETAIL_PRODUCT } from './Queries/Product';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GREETING,
        getAllProducts: GET_ALL_PRODUCTS,
        getDetailProduct: GET_DETAIL_PRODUCT
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createProduct: CREATE_PRODUCT
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})