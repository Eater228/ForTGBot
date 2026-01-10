import React, { useEffect, useState } from "react"
import { FormContainer, Input } from "./Form.styled"

const Form = ({ tg }) => {
  console.log(tg.initDataUnsafe)
  const [formData, setFormData] = useState({
    name: tg.initDataUnsafe?.user?.first_name || "",
    email: "",
    phone: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Name:", formData.name)
    console.log("Email:", formData.email)
    console.log("Phone:", formData.phone)

    tg.sendData(JSON.stringify(formData))
  }

  useEffect(() => {
    if (tg) {
      console.log("Telegram WebApp доступний!");
      console.log("Дані користувача:", tg.initDataUnsafe?.user);
    } else {
      console.log("Telegram WebApp не знайдено (можливо, відкрили у браузері)");
    }
  }, [tg]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Ведіть ваше ім'я"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <Input
        type="email"
        placeholder="Ведіть ваш email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <Input
        type="tel"
        placeholder="Ведіть ваш номер телефону"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <button type="submit" id="order">Submit</button>
    </FormContainer>
  )
}

export default Form
