import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Album from './containers/Characterlist';
import LinearProgress from '@material-ui/core/LinearProgress';

const getCharacters = gql`

{
    characters(page: 1) {
   
   results {
     id
     name
     gender
     status
     image
     location{
       name
     }
     episode{
       name
     }
     
   }
 }
}
`;

function Home() {

    const {loading,error,data} = useQuery(getCharacters); 

    if(loading) return  <LinearProgress />
    if(error) return <p>Error :(</p>

    return (
        <div>
            <Album data={data} />

        </div>
    )








}
export default Home
