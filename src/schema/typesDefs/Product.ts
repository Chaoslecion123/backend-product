import {GraphQLObjectType, GraphQLString, GraphQLID,GraphQLFloat} from 'graphql';

export const ProductType = new GraphQLObjectType({
    name:"Product",
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        brand: {type: GraphQLString},
        category: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        image: {type: GraphQLString},
        countInStock: {type: GraphQLFloat},
    }
})