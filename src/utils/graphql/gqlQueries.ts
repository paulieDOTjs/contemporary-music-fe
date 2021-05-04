import { gql } from "@apollo/client";

export const gqlQueries = {
  GET_ALL_SONGS: gql`
    query {
      getSongs {
        title
        degreeOfDifficulty
        madeFamousBy
        style
        composers
        performanceNotes
        studentsStudied
        songFeatures
        tempo
        other
      }
    }
  `,
};
