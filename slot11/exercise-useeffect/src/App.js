import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ValidatedInput from "./ValidatedInput";   
import LoginForm from "./LoginForm";             
import CompleteForm from "./CompleteForm";       

function App() {
  return (
    <div className="container mt-5">
      <h2>Bài 4: Xác thực độ dài đầu vào</h2>
      <ValidatedInput />

      <hr />

      <h2>Bài 5: Form đăng nhập (Email & Password)</h2>
      <LoginForm />

      <hr />

      <h2>Bài 6: Form đầy đủ với các trường kiểm tra</h2>
      <CompleteForm />
    </div>
  );
}

export default App;
