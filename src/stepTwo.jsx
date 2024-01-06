const stepTwo = (props) => {
  return (
    <div className={props.registered === false ? "invisible" : ""}>
      <h1>Results</h1>
      <div>
        <div>Name : {props.name}</div>
        <div>Email : {props.email}</div>
        <div>Password : {props.password}</div>
      </div>
      <input
        type="button"
        onClick={props.setRegistered(false)}
        value="Edit your information"
      />
    </div>
  );
};
export default stepTwo;
