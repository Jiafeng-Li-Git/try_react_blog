import { useQuery, gql } from '@apollo/client'

const GET_CHARACTER = gql`
query GetPassword($name: String!){
    author(where: {username: $name}) {
      password
    }
  }
`;

export default function getPassword(name){
    const {error, data, loading} = useQuery(GET_CHARACTER, {
        variables: {
            name
        }
    });
    
    return data;
}
