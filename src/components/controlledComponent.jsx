import React, {useState} from 'react';

//Оголошуємо функціональний компонент ControledComponent
const ControlledComponent = () => {
  //Створюємо об'єкт з даними форми
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      password: '',
    }
  );

  //Обробляємо зміни в input тегах
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  //Виводимо дані форми
  return (
    <div>
      <h1>Controlled Component</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email</label>
        <input type="text" name ="email" value={formData.email} onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </form>
    </div>
  );
}

export default ControlledComponent;

