import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
query {
    author(where: {username: "Jay"}) {
      posts {
        content {
          text
        }
      }
    }
    post(where: {id: "clb4ee8ii61cs0bu9fdjx7y9z"}) {
    coverPhoto {
      url
    }
  }
}
`;

export const usePost = () => {
    const {error, data, loading} = useQuery(GET_CHARACTERS);
    
    return {
        error,
        data,
        loading,
    };
}