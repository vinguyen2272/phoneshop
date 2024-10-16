/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input,Typography } from 'antd';
import { useState } from 'react';
import style from './style.module.css'
const { Title } = Typography;

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const handlePost = (values:any) => {
    const { clientName, email,  } = values;
    setSuccessMsg(
      `Thank you dear ${clientName}, Your message has been received successfully. Further details will be sent to you by your email at ${email}.`
    );
  };

  return (
    <>
      <Title level={2}>Contact</Title>
      {successMsg ? (
        <p>{successMsg}</p>
      ) : (
        <Form 
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        className={style.myForm} 
        onFinish={handlePost}>
          <Title level={3}>Fill up a Form</Title>
          <Form.Item
          className={style.formItem}
            label="Name"
            name="clientName"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input className={style.input} placeholder="Enter your name here" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input className={style.input} placeholder="Enter your email here" />
          </Form.Item>
          <Form.Item
            label="Messages"
            name="messages"
            rules={[{ required: true, message: 'Please enter your message!' }]}
          >
            <Input.TextArea
            className={style.input}
              rows={3}
              placeholder="Enter your message here"
            />
          </Form.Item>
          
            <Button color="default" variant="solid" htmlType="submit" className={style.myButton}>
              Post
            </Button>
          
        </Form>
      )}
    </>
  );
};

export default Contact;
