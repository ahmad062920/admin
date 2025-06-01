/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Clients = () => {

  const itemsData = [
    {
      id: 1,
      name: 'Bottled Water - 500ml',
      itemsBuy: 10,
      itemsPrice: 1.5, // Price per item
      total: 10 * 1.5, // Total price for 10 items
    },
    {
      id: 2,
      name: 'Bottled Water - 1L',
      itemsBuy: 8,
      itemsPrice: 2.5,
      total: 8 * 2.5,
    },
    {
      id: 3,
      name: 'Water Purifier - 5L',
      itemsBuy: 5,
      itemsPrice: 50,
      total: 5 * 50,
    },
    {
      id: 4,
      name: 'Mineral Water - 250ml',
      itemsBuy: 15,
      itemsPrice: 1.2,
      total: 15 * 1.2,
    },
    {
      id: 5,
      name: 'Water Filter Cartridge',
      itemsBuy: 20,
      itemsPrice: 10,
      total: 20 * 10,
    },
  ];

  const rentData = [
    {
      id: 1,
      name: "Portable Water Tank",
      totalDuration: "3 months",
      totalAmount: "75.00",
      rentCount: 1
    },
    {
      id: 2,
      name: "Water Purifier Rental",
      totalDuration: "6 months",
      totalAmount: "90.00",
      rentCount: 2
    },
    {
      id: 3,
      name: "Water Cooler Rental",
      totalDuration: "1 year",
      totalAmount: "420.00",
      rentCount: 1
    },
    {
      id: 4,
      name: "Water Filter Rental",
      totalDuration: "5 months",
      totalAmount: "50.00",
      rentCount: 3
    },
    {
      id: 5,
      name: "Water Dispenser Rental",
      totalDuration: "2 months",
      totalAmount: "40.00",
      rentCount: 1
    }
  ];

  const servicesData = [
    {
      id: 1,
      serviceName: "OneTime",
      subscriptionPrice: "$50.00",
      subscriptionCount: 10,
      total: "$500.00"
    },
    {
      id: 2,
      serviceName: "AMC",
      subscriptionPrice: "120.00",
      subscriptionCount: 5,
      total: "600.00"
    },
    {
      id: 3,
      serviceName: "MMC",
      subscriptionPrice: "20.00",
      subscriptionCount: 15,
      total: "300.00"
    }
  ];
  
  

  
  const title = 'Clients Sales';
  const description = 'Clients Sales Page';


  

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/storefront/home">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">home</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>

        </Row>
      </div>

      
      
      <Card className="mb-5 card-print print-me">
        <Card.Body>
        
          <div className="separator separator-light mt-5 mb-5" />
          <Row className="g-1 mb-5">
            <Col md="8">
              <div className="py-3">
                <div>Blaine Cottrell</div>
                <div>id: #23445</div>
              </div>
            </Col>
            <Col className="text-sm-end text-muted mt-3">
              <div>Total Sales :</div>
              
            </Col>
            <Col xs="auto" className="text-end mt-3">
              <div>AED 61.82</div>
              
            </Col>
          </Row>
          <h2 className="small-title mt-5">Products Buy</h2>
          <div>
          <Row className="mb-4 d-none d-sm-flex">
  <Col xs="6" className="text-start">
    <p className="mb-0 text-small text-muted">Product Name</p>
  </Col>
  <Col xs="2" className="text-center">
    <p className="mb-0 text-small text-muted">Products Buy (Qty)</p>
  </Col>
  <Col xs="2" className="text-end">
    <p className="mb-0 text-small text-muted">Price</p>
  </Col>
  <Col xs="2" className="text-end">
    <p className="mb-0 text-small text-muted">TOTAL</p>
  </Col>
</Row>

{itemsData.map((item, id) => (
  <Row key={id} className="mb-4 mb-sm-2">
    <Col sm="6" className="text-start">
      <h6 className="mb-0">{item.name}</h6>
    </Col>
    <Col sm="2" className="text-center">
      <p className="mb-0 text-alternate text-amber-500"
      >{item.itemsBuy}</p>
    </Col>
    <Col sm="2" className="text-end">
      <p className="mb-0 text-alternate">AED {item.itemsPrice}</p>
    </Col>
    <Col sm="2" className="text-end">
    <p className="small-title">AED {item.total}</p>

    </Col>
  </Row>
))}
 <h2 className="small-title mt-5">Products Rent</h2>

<Row className="mb-4 d-none d-sm-flex">
  <Col xs="6" className="text-start">
    <p className="mb-0 text-small text-muted">Product Name</p>
  </Col>
  <Col xs="2" className="text-center">
    <p className="mb-0 text-small text-muted">Total Duration</p>
  </Col>
  <Col xs="2" className="text-end">
    <p className="mb-0 text-small text-muted">Rent Count</p>
  </Col>
  <Col xs="2" className="text-end">
    <p className="mb-0 text-small text-muted">TOTAL</p>
  </Col>
</Row>

{rentData.map((item, id) => (
  <Row key={id} className="mb-4 mb-sm-2">
    <Col sm="6" className="text-start">
      <h6 className="mb-0">{item.name}</h6>
    </Col>
    <Col sm="2" className="text-center">
      <p className="mb-0 text-alternate">{item.totalDuration}</p>
    </Col>
    <Col sm="2" className="text-end">
      <p className="mb-0 text-alternate">AED {item.rentCount}</p>
    </Col>
    <Col sm="2" className="text-end">
      <p className="small-title">AED {item.totalAmount}</p>
    </Col>
  </Row>
))}


<h2 className="small-title mt-5">Service  Rent</h2>

<Row className="mb-4 d-none d-sm-flex">
  <Col xs="6" className="text-start">
    <p className="mb-0 text-small text-muted">Service Name</p>
  </Col>
  <Col xs="2" className="text-center">
    <p className="mb-0 text-small text-muted">Subscription Price</p>
  </Col>
  <Col xs="2" className="text-end">
    <p className="mb-0 text-small text-muted">Subscription Count</p>
  </Col>
  <Col xs="2" className="text-end">
    <p className="mb-0 text-small text-muted">TOTAL</p>
  </Col>
</Row>

{servicesData.map((item, id) => (
  <Row key={id} className="mb-4 mb-sm-2">
    <Col sm="6" className="text-start">
      <h6 className="mb-0">{item.serviceName}</h6>
    </Col>
    <Col sm="2" className="text-center">
      <p className="mb-0 text-alternate">{item.subscriptionPrice}</p>
    </Col>
    <Col sm="2" className="text-end">
      <p className="mb-0 text-alternate">AED {item.subscriptionCount}</p>
    </Col>
    <Col sm="2" className="text-end">
      <p className="small-title">AED {item.total}</p>
    </Col>
  </Row>
))}






           
          </div>
          
          <div className="separator separator-light mt-5 mb-5" />
          
         
         
        </Card.Body>
      </Card>
      {/* Standard End */}

      
    </>
  );
};

export default Clients;
