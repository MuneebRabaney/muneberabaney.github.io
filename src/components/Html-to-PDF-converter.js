import * as React from "react";
import { Link } from "gatsby";
import { Main } from "@components";

// TODO: Create a tool that your able to convert
// your html to a
const ConvertHtmlToPDF = () => {
  const handleDownload = function () {};

  return (
    <Main>
      <button onClick={handleDownload} type="button" value="download" />
    </Main>
  );
};

export default ConvertHtmlToPDF;
