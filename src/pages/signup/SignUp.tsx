/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Form, Input, Checkbox, Button, message, Row, Col } from "antd";
import { CheckCircleTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import  logoLight  from "../../assets/logo.png";
import styles from './SignUp.module.css';

const SignUp = () => {
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);

  const handleSignUp = (values:any) => {
    if (checked) {
      message.success(`Hello dear ${values.clientName}, Welcome to CANNY Admin panel.`);
      form.resetFields();
    }
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
        <div className={styles.rightContainer}>
        <h2 className={styles.title}>Create your account</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSignUp}
          className={styles.form}
        >
          <Form.Item
            label="Full Name"
            name="clientName"
            rules={[{ required: true, message: 'Enter your name' }]}
          >
            <Input placeholder="eg. John Doe" />
          </Form.Item>

          <Form.Item
            label="Work Email"
            name="email"
            rules={[
              { required: true, message: 'Enter your email' },
              { type: 'email', message: 'Enter a valid email' }
            ]}
          >
            <Input placeholder="john@workemail.com" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Enter your phone number' }]}
          >
            <Input placeholder="008801234567891" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Create a password' },
              { min: 6, message: 'Passwords must be at least 6 characters' }
            ]}
          >
            <Input.Password placeholder="Create password" />
          </Form.Item>

          <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Enter your address' }]}>
            <Input placeholder="road-001, house-115, example area" />
          </Form.Item>

          <Form.Item label="City" name="city" rules={[{ required: true, message: 'Enter your city name' }]}>
            <Input placeholder="Your city" />
          </Form.Item>

          <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Enter your country' }]}>
            <Input placeholder="Your country" />
          </Form.Item>

          <Form.Item label="Zip/Postal code" name="zip" rules={[{ required: true, message: 'Enter your zip code' }]}>
            <Input placeholder="Your zip code" />
          </Form.Item>

          <Form.Item>
            <Checkbox onChange={() => setChecked(!checked)}>
              I agree to the CANNY <Link to="/" className={styles.link}>Terms of Service</Link> and <Link to="/" className={styles.link}>Privacy Policy</Link>.
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button color="default" variant="solid" htmlType="submit" disabled={!checked} style={{width:'100%'}}>
              Create Account
            </Button>
          </Form.Item>

          <p className={styles.signInPrompt}>
            Don't have an Account? <Link to="/signin" className={styles.link}>Sign in</Link>
          </p>
        </Form></div>
      </Col>
    </Row>
  );
};

export default SignUp;
