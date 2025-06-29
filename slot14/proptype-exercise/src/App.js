import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserProfile from './UserProfile';
import UserProfile2 from './UserProfile2';
import MyForm from './MyForm';
import AdvancedForm from './AdvancedForm';

function App() {

  const handleProfile2Submit = data => {
    console.log('UserProfile2 submitted:', data);
    alert(`UserProfile2 gửi: ${JSON.stringify(data)}`);
  };

  const handleMyFormSubmit = data => {
    console.log('MyForm submitted:', data);
    alert(`MyForm gửi: ${JSON.stringify(data)}`);
  };

  const handleAdvancedFormSubmit = data => {
    console.log('AdvancedForm submitted:', data);
    alert(`AdvancedForm gửi: ${JSON.stringify(data)}`);
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1 className="mb-4">Tổng hợp 4 ví dụ React</h1>

   
      <section className="mb-5">
        <h2>Ví dụ 1: UserProfile</h2>
        <UserProfile name="Nguyễn Văn A" age={25} />
        <UserProfile name="" age={25} />
        <UserProfile name="Nguyễn Văn B" age="twenty five" />
        <UserProfile name="Nguyễn Văn C" age={null} />
      </section>


      <section className="mb-5">
        <h2>Ví dụ 2: UserProfile2 (Form Bootstrap)</h2>
        <UserProfile2
          name="Trần Thị B"
          age="30"
          onSubmit={handleProfile2Submit}
        />
      </section>

      
      <section className="mb-5">
        <h2>Ví dụ 3: MyForm (useReducer + Alert)</h2>
        <MyForm
          title="Đăng ký người dùng (MyForm)"
          onSubmit={handleMyFormSubmit}
        />
      </section>

     
      <section className="mb-5">
        <h2>Ví dụ 4: AdvancedForm (Form nâng cao)</h2>
        <AdvancedForm onSubmit={handleAdvancedFormSubmit} />
      </section>
    </div>
  );
}

export default App;
