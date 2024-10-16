/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './login.module.css'
import  logoLight  from "../../assets/logo.png";
import { Button, Col, Form, Input, message, Row } from 'antd';
import { Link } from 'react-router-dom';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { useState } from 'react';

const Login = () => {
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignIn = (values:any) => {
    const { email, password } = values;

    if (!email || !password) {
      message.error("Please fill in all fields.");
      return;
    }

    setSuccessMsg(
      `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
    );
  };
  return (
    <Row className={styles.container}>
    <Col lg={7} sm={0}
    className={styles.leftSide}>
      <div className={styles.leftContainer}>
      <Link to="/">
        <img src={logoLight} alt="logo" className={styles.logo}/>
      </Link>
      <h2 className={styles.title}>Get started for free</h2>
      <p className={styles.subtitle}>Create your account to access more</p>
      <div className={styles.features}>
      <div className={styles.subItem}>
      <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:'1.5rem', height:'1.5rem'}}/>
      <p><span>Get started fast with CANNY</span> <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae temporibus debitis, optio vitae laudantium animi officia nisi veritatis eius facere.</p>
      </div>
      <div className={styles.subItem}>
      <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:'1.5rem', height:'1.5rem'}}/>
      <p><span>Access all CANNY services</span> <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae temporibus debitis, optio vitae laudantium animi officia nisi veritatis eius facere.</p>
      </div>

      <div className={styles.subItem}>
      <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:'1.5rem', height:'1.5rem'}}/>
      <p><span>Trusted by online Shoppers</span> <br/>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae temporibus debitis, optio vitae laudantium animi officia nisi veritatis eius facere.</p>
      </div>
      </div>
      <div className={styles.footer}>
        <p>© CANNY</p>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
      </div></div>
    </Col>
    
    <Col lg={17} sm={24} 
    className={styles.rightSide}>
      <div className={styles.signInContainer}>
      <div className={styles.formContainer}>
        {successMsg ? (
          <div className={styles.successMessage}>
            <p>{successMsg}</p>
            <Link to="/signup">
              <Button type="primary">
                Sign Up
              </Button>
            </Link>
          </div>
        ) : (
          <Form
            className={styles.form}
            onFinish={handleSignIn}
            layout="vertical"
          >
            <h2 className={styles.title}>Sign in</h2>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input placeholder="john@workemail.com" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input.Password placeholder="Create password" />
            </Form.Item>
            <Form.Item>
              <Button color="default" variant="solid" htmlType="submit" style={{width:'100%'}}>
                Sign In
              </Button>
            </Form.Item>
            <p className={styles.signUpPrompt}>
              Don't have an Account?{" "}
              <Link to="/signup">
                <span className={styles.link}>Sign up</span>
              </Link>
            </p>
          </Form>
        )}
      </div>
    </div>
    </Col>
  </Row>
  )
}

export default Login
