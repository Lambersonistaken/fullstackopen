const Error = ({ errMessage }) => {
  if (errMessage === null) {
    return null;
  }

  return <div className="errMessage">{errMessage}</div>;
};

export default Error;
