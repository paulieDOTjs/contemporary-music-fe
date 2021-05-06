import { gql } from "@apollo/client";

export const getAllSongs = gql`
  query {
    getSongs {
      timeStamp
      title
      madeFamousBy
      degreeOfDifficulty
      style
      composers
      performanceNotes
      studentsStudied
      decade
      songFeatures
      tempo
      fileName
    }
  }
`;
