import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, NavLink, Row } from 'react-bootstrap';
import PerformanceChart from 'views/dashboard/components/PerformanceChart';

function Analytics() {
  const [pendingItems, setPendingItems] = useState([]);
  const [receivedItems, setReceivedItems] = useState([]);

  const topProducts = [
    {
      id: 1,
      ProductName: 'Water Filter',
      Price: 334.66,
      ProductType: 'item',
      TotalSales: 37348.88,
    },
    {
      id: 2,
      ProductName: 'Water Purifier',
      Price: 421.33,
      ProductType: 'item',
      TotalSales: 45012.15,
    },
  ];

  const receivedItemsData = [
    {
      id: 1,
      customerId: 12244,
      customerName: 'John Doe',
      items: [
        { name: 'Water Tank', quantity: 2, status: 'pending' },
        { name: 'Water Pump', quantity: 1, status: 'received' },
      ],
      dueDate: '2025-05-10',
    },
    {
      id: 2,
      customerId: 12244,
      customerName: 'Alice Smith',
      items: [
        { name: 'Sprinkler', quantity: 1, status: 'pending' },
      ],
      dueDate: '2025-04-28',
    },
  ];

  useEffect(() => {
    const pending = [];
    const received = [];
  
    receivedItemsData.forEach(rental => {
      rental.items.forEach(item => {
        const itemWithCustomer = {
          ...item,
          customer: rental.customerName,
          customerId: rental.customerId, 
        };
        if (item.status === "pending") {
          pending.push(itemWithCustomer);
        } else if (item.status === "received") {
          received.push(itemWithCustomer);
        }
      });
    });
  
    setPendingItems(pending);
    setReceivedItems(received);
  }, []);
  

  const title = 'Analytics';
  const description = 'Analytics Page';

  return (
    <div className="page-title-container">
      <HtmlHead title={title} description={description} />

      <Row className="g-0">
        <Col className="col-auto mb-3 mb-sm-0 me-auto">
          <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
            <CsLineIcons icon="chevron-left" size="13" />
            <span className="align-middle text-small ms-1">Home</span>
          </NavLink>
          <h1 className="mb-0 pb-0 display-4" id="title">
            {title}
          </h1>
        </Col>
        <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
          <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none">
            <CsLineIcons icon="sort" />
          </Button>
        </Col>
      </Row>

      {/* Top Products */}
      <Row>
        <Col xl="6" className="mb-5 mt-5">
          <h2 className="small-title">Top Ranking Products</h2>
          {topProducts.map((item, id) => (
            <Card key={id} className="mb-2 sh-15 sh-md-6">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                    <div className="body-link stretched-link">{item.ProductName}</div>
                  </Col>
                  <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                    <Badge bg="outline-primary" className="me-1">
                      <span className="text-small">AED</span> {item.Price}
                    </Badge>
                  </Col>
                  <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                    {item.ProductType}
                  </Col>
                  <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                    <Badge bg="outline-primary" className="me-1">{item.TotalSales}</Badge>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Col>

        {/* Performance Chart */}
        <Col xl="6" className="mb-5 mt-5">
          <h2 className="small-title">Performance</h2>
          <Card className="sh-45 h-xl-100-card">
            <Card.Body className="h-100">
              <div className="h-100">
                <PerformanceChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Pending Items */}
      <Row>
        <Col xl="6" className="mb-5 mt-5">
        <h2 className="small-title">Total Items Pending :  
          <strong> 76477</strong>
        </h2>
        <h2 className="small-title">Pending Items</h2>
        
{pendingItems.map((item, id) => (
  <Card key={id} className="mb-2 sh-15 sh-md-6">
    <Card.Body className="pt-0 pb-0 h-100">
      <Row className="g-0 h-100 align-content-center">
        <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-secondary">ID: {item.customerId}</Badge>
        </Col>
        <Col xs="12" md="3" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-primary">{item.customer}</Badge>
        </Col>
        <Col xs="12" md="3" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          {item.name}
        </Col>
        <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-primary">{item.quantity}</Badge>
        </Col>
        <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-warning">{item.status}</Badge>
        </Col>
      </Row>
    </Card.Body>
  </Card>
))}
</Col>

        {/* Received Items */}
        <Col xl="6" className="mb-5 mt-5">
        <h2 className="small-title mt-5">Received Items</h2>
        
{receivedItems.map((item, id) => (
  <Card key={id} className="mb-2 sh-15 sh-md-6">
    <Card.Body className="pt-0 pb-0 h-100">
      <Row className="g-0 h-100 align-content-center">
        <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-secondary">ID: {item.customerId}</Badge>
        </Col>
        <Col xs="12" md="3" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-primary">{item.customer}</Badge>
        </Col>
        <Col xs="12" md="3" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          {item.name}
        </Col>
        <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-primary">{item.quantity}</Badge>
        </Col>
        <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
          <Badge bg="outline-success">{item.status}</Badge>
        </Col>
      </Row>
    </Card.Body>
  </Card>
))}
 
        </Col>
      </Row>
    </div>
  );
}

export default Analytics;
