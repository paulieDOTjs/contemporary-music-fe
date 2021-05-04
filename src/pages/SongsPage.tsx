import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { gqlQueries } from "../utils/graphql/gqlQueries";
import { song } from "../models/song";
import { PageProps } from "./PageProps";

export default function SongsPage(props: PageProps) {
  const { error, data } = useQuery(gqlQueries.GET_ALL_SONGS);
  const [catalog, setCatalog] = useState<song[]>([]);
  const { setErrorMessage } = props;

  useEffect(() => {
    if (data) {
      setCatalog(data.getSongs);
      console.log(data.getSongs);
    }
    if (error) {
      setErrorMessage("Error loading data.");
    }
  }, [data, error, setErrorMessage]);

  return (
    <div>
      {catalog && catalog.length > 1 ? catalog.map((song) => song.title) : ""}
    </div>
  );
}
