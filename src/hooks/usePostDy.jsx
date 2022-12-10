import { useQuery, gql } from '@apollo/client'

const GET_CHARACTER = gql`
query GetPost($name: name){
    author(where: {name: $name}) {
      posts {
        content {
          html
        }
      }
    }
  }
`;

export const usePostDy = (name) => {
    const {error, data, loading} = useQuery(GET_CHARACTER, {
        variables: {
            name
        }
    });
    
    return {
        error,
        data,
        loading,
    };
}