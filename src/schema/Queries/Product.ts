import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { Products } from "../../Entities/Product";
import { ProductType } from "../typesDefs/Product";

export const GET_ALL_PRODUCTS = {
   type: new GraphQLList (ProductType),
    async resolve(){
        const result = await Products.find();
        return result;
    }
}


export const GET_DETAIL_PRODUCT = {
    type: ProductType,
    args: {
        id: {type: GraphQLString}
    },
    async resolve(_:any, args:any){
        return await Products.findOne(args.id)
    }
}