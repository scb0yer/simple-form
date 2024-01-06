import "./App.css";
import Footer from "./footer";
import Form from "./form";
import StepTwo from "./stepTwo";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [registered, setRegistered] = useState("false");
  return (
    <>
      <main>
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          password1={password1}
          setPassword1={setPassword1}
          registered={registered}
          setRegistered={setRegistered}
        />
        <StepTwo
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          password1={password1}
          setPassword1={setPassword1}
          registered={registered}
          setRegistered={setRegistered}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
