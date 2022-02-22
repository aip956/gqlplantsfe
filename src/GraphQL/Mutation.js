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

export const UPDATE_PLANT = gql` 
    mutation updatePlant(
        $name:String,
        $type:String,
        $image:String
        )
        {
            updatePlant(
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