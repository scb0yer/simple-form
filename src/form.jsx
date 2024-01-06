const Form = (props) => {
  const onChange = (event, target) => {
    if (target === "name") {
      props.setName(event.target.value);
    } else if (target === "email") {
      props.setEmail(event.target.value);
    } else if (target === "password") {
      props.setPassword(event.target.value);
    } else if (target === "password1") {
      props.setPassword1(event.target.value);
    }
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.password.length < 7
            ? alert("Mot de passe trop court !")
            : props.password1 !== props.password
            ? alert("Les deux mots de passe doivent être identiques !")
            : props.setRegistered(true);
        }}
        className={props.registered === true ? "invisible" : ""}
      >
        <h1>Create account</h1>
        <div className="input-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Jean Dupont"
            value={props.name}
            onChange={(event) => {
              onChange(event, "name");
            }}
          />
        </div>
        <div className="input-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="jeandupont@lereacteur.io"
            value={props.email}
            onChange={(event) => {
              onChange(event, "email");
            }}
          />
        </div>
        <div className="input-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="lErEacEuR2024"
            value={props.password}
            onChange={(event) => {
              onChange(event, "password");
            }}
          />
        </div>
        <div className="input-form">
          <label htmlFor="password1">Confirm your password</label>
          <input
            type="password"
            id="password1"
            placeholder="lErEacEuR2024"
            value={props.password1}
            onChange={(event) => {
              onChange(event, "password1");
            }}
          />
        </div>
        <div className="input-form">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
export default Form;
