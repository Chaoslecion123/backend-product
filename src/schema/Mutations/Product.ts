import {GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLString} from 'graphql';
import { resolve } from 'path/posix';
import { Products } from '../../Entities/Product';
import { ProductType } from '../typesDefs/Product';

export const CREATE_PRODUCT = {
    type: ProductType,
    args: {
        name: {type: GraphQLString},
        brand: {type: GraphQLString},
        category: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLFloat},
        image: {type: GraphQLString},
        countInStock: {type: GraphQLFloat}

    },
    async resolve(_:any, args:any){
        const {name,brand,category,description,price,image,countInStock} = args;
        const result = await Products.insert({
            name,brand,category,description,price,image,countInStock
        })
        console.log(result)
        return {...args,id: result.identifiers[0].id}
    }
}