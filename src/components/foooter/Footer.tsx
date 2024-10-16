import { useState } from 'react';
import Style from './style.module.css'
import {Col, Row, Input, Button } from 'antd';


const Footer = () => {

    const [emailInfo, setEmailInfo] = useState<string>("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

    const emailValidation = (email: string): boolean => {
        return /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email.toLowerCase());
      };

      const handleSubscription = () => {
        if (emailInfo === "") {
          setErrMsg("Please provide an Email !");
        } else if (!emailValidation(emailInfo)) {
          setErrMsg("Please give a valid Email!");
        } else {
          setSubscription(true);
          setErrMsg("");
          setEmailInfo("");
        }
      };
  return (
    <>
    <Row gutter={24} className={Style.footerContainer}>
            <Col lg={6} md={12} xs={24} className={Style.colFooter}>
            <h3>More about Orebi Shop</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus deserunt odio impedit quo. Vero modi enim laudantium numquam qui.</p>
            </Col>
            <Col lg={6} md={12} xs={24} className={Style.colFooter}>
            <h3>Shop</h3>
            <p className={Style.virtualLink}>Accesories</p>
            <p className={Style.virtualLink}>Clothes</p>
            <p className={Style.virtualLink}>Electronics</p>
            <p className={Style.virtualLink}>Home appliances</p>
            <p className={Style.virtualLink}>New Arrivals</p>
            </Col>
            <Col lg={6} md={12} xs={24} className={Style.colFooter}>
            <h3>Your account</h3>
            <p className={Style.virtualLink}>Profile</p>
            <p className={Style.virtualLink}>Orders</p>
            <p className={Style.virtualLink}>Addresses</p>
            <p className={Style.virtualLink}>Account Details</p>
            <p className={Style.virtualLink}>Payment Options</p>
            </Col>
            <Col lg={6} md={12} xs={24} className={Style.colFooter}>
            <h3>Subscribe to our newsletter.</h3>
            <p>A at pellentesque et mattis porta enim elementum.</p>
           
            {subscription?(
                <p className={Style.successMsg}>Thank you for subscribing!</p>
            ): (<>
                <div className={Style.subscribe}>
                <Input placeholder='Enter your email'
                onChange={(e) => setEmailInfo(e.target.value)}
                value={emailInfo}/>
                <Button onClick={handleSubscription} type='primary' className={Style.mybutton}>Subscribe</Button>
                </div>
                {errMsg && (
                    <p className={Style.errMess}>
                      {errMsg}
                    </p>
                  )}
          </>  )}
            </Col>
        </Row>
        <span className={Style.ft}> Copyright 2024 | Canny shopping | All Rights Reserved |</span>
    </>
  )
}

export default Footer
