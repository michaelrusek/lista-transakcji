import React from "react";
import { TextField } from "@mui/material";

const Filter = ({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}) => {
  return (
    <div className="flex flex-col max-w-[30rem]">
      <h2 className="mb-5">Search by Beneficiary</h2>
      <TextField
        label="Type beneficiary here"
        variant="outlined"
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
