import { Button, Form, Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import MaskedInput from 'antd-mask-input';
import { useSignIn } from "../hooks/mutations";
import type { SignIn } from "../types";
import "./style.scss";
import { useState } from "react";

const SignIn = () => {
  const [form] = Form.useForm();
  const { mutate , isPending} = useSignIn();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (values: SignIn) => {
    const phone = values.phone_number.split("").filter(item => item !== " ").join("")
    const paylaod = {...values, phone_number: phone}
    mutate(paylaod); 
  };

  const validatePhoneNumber = (value: string) => {
    const cleanValue = value.replace(/\D/g, ''); // Raqam bo'lmagan belgilarni olib tashlash
    return cleanValue.length === 12; // 12 ta raqam tekshirish (ya'ni +998 va 9 ta raqam)
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="auth">
      <div className="auth-form">
        <h2 className="auth-form__title">Sign In</h2>
        <Form
          form={form}
          name="auth"
          style={{ width: "100%", marginTop: "20px" }}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item
            label="Phone number"
            name="phone_number"
            rules={[
              { required: true, message: "Enter phone number" },
              {
                validator: (_, value) => {
                  if (!value || validatePhoneNumber(value)) {
                    return Promise.resolve(); 
                  }
                  return Promise.reject("Phone number must be +998 followed by 9 digits");
                }
              }
            ]}
          >
            <MaskedInput
              size="large"
              mask="+998 00 000 00 00"
              placeholder="+998 xx xxx xx xx"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Enter password" },
              { min: 6, message: "Password must be at least 6 characters long" },
            ]}
          >
            <Input
              size="large"
              type={showPassword ? 'text' : 'password'}
              suffix={
                showPassword ? (
                  <EyeOutlined onClick={togglePasswordVisibility} />
                ) : (
                  <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
                )
              }
            />
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%" }}
              type="primary"
              htmlType="submit"
              loading={isPending}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
