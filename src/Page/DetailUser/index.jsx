import React from "react";
import { useParams } from "react-router-dom";

const DetailUser = () => {
    let {id} = useParams();
  return (
    <React.Fragment>
      <h3>DetailUser</h3>
      <h4>{id}</h4>
    </React.Fragment>
  );
};

export default DetailUser;
