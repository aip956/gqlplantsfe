import { gql } from '@apollo/client';

export const CREATE_PLANT = gql` 
    mutation createPlant(
        $name:String,
        $type:String,
        $image:String
        )
        {
            createPlant(
            plant:{
                name:$name,
                type:$type,
                image:$image
            })
                {
                    id
                    name 
                    type 
                }
        }
`; 

export const DELETE_PLANT=gql`
mutation deletePlant($id:String){
deletePlant(id:$id)}
`;