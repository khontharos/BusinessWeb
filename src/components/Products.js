import React, { Component } from 'react'
import data from '../data';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';

export default class Products extends Component 
{
    render() {
        return (
            <div>
                <h2>สินค้าทั้งหมด</h2>
                <Row>
                {
                data.products.map(item =>
                    <Col md={3}>
                        <Card>
                            <CardImg src={item.pic} />
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                <CardTitle>ราคา {item.pire} บาท</CardTitle>
                                <CardTitle>จำนวน {item.stock}</CardTitle>                           
                            </CardBody>
                        </Card>
                    </Col> 
                )

                }
                </Row>
            </div>
        )
    }
}