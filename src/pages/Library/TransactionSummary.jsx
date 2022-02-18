import React from "react";
import { Breadcrumb } from "../../components/common/Breadcrumb";

const TransactionSummary = () => {
  return (
    <>
      <h1 className="mt-4">Library Management</h1>
      <Breadcrumb path={["Library Management", "Transaction Summary"]} />
    </>
  );
};

export default TransactionSummary;
