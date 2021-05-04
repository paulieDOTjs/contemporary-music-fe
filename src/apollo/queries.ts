import { gql } from "@apollo/client";

export const queries = {
  getAllSongs: gql`
    query {
      getSongs {
        songName
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
