import React, { Component } from 'react'
import { Button, Jumbotron } from "reactstrap";
import Slides from './Slides';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Slides/>   
                <Jumbotron>
                  ยินดีต้อนรับสู่เว็บไซต์ <br/> 
                 <Button>เข้าสู่ระบบ</Button>
                </Jumbotron>
            </div>
        )
    }
}