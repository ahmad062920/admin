import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Row, Col, Button, Dropdown, Card, Badge, Form } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const CustomersDetail = () => {
  const title = 'Customer Detail';
  const description = 'Ecommerce Customer Detail Page';

  const topProducts=[
    {
        id:1,
      ServiceName:'AMC',
        Price:334.66,
        currentStatus:'Active',
        TotalSales:37348.88

    },
    {
        id:2,
        ServiceName:'MMC',
        Price:334.66,
        currentStatus:'cancelled',
        TotalSales:37348.88

    },
]

const recentOrders=[
  {
    id:1,
    OrderID: 14534,
    Price: 6437,
    Date: '10.03.2025',
    status:'confirmed'

  },
  {
    id:2,
    OrderID: 14534,
    Price: 6437,
    Date: '10.03.2025',
    status:'pending'

  },
  {
    id:3,
    OrderID: 14534,
    Price: 6437,
    Date: '10.03.2025',
    status:'cancelled'

  }
]

  // Tags
  const [tags, setTags] = useState([
    { id: 0, name: 'Rates' },
    { id: 1, name: 'Sales Shopper' },
    { id: 2, name: 'Newsletter' },
  ]);
  const onTagDelete = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };
  const onTagAddition = (tag) => {
    setTags(() => {
      return [...tags, tag];
    });
  };

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/customers">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Customers</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="save" /> <span>Update</span>
            </Button>
            <Dropdown className="ms-1" align="end">
              <Dropdown.Toggle className="btn-icon btn-icon-only dropdown-toggle-no-arrow" variant="outline-primary">
                <CsLineIcons icon="more-horizontal" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>View Invoice</Dropdown.Item>
                <Dropdown.Item>Track Package</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>

      <Row>
        <Col xl="4">
          <h2 className="small-title">Info</h2>
          <Card className="mb-5">
            <Card.Body className="mb-n5">
              <div className="d-flex align-items-center flex-column mb-5">
                <div className="mb-5 d-flex align-items-center flex-column">
                  <div className="sw-6 sh-6 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl">
                    <div className="text-white">BC</div>
                  </div>
                  <div className="h5 mb-1">Blaine Cottrell</div>
                  <div className="text-muted">
                    <CsLineIcons icon="pin" className="me-1" />
                    <span className="align-middle">Montreal, Canada</span>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                  <Button variant="primary" className="w-100 me-2">
                    Edit
                  </Button>
                  <Button variant="outline-primary" className="w-100 me-2">
                    Block
                  </Button>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </div>
              <div className="mb-5">
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="credit-card" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Lifetime Spent</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">$ 5,325.55</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="cart" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Avarage Order</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">$ 590.50</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="boxes" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Order Count</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">17</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              
              <div className="mb-5">
                <p className="text-small text-muted mb-2">ADDRESS</p>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 me-1">
                      <CsLineIcons icon="user" size="17" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="text-alternate">Blaine Cottrell</Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 me-1">
                      <CsLineIcons icon="pin" size="17" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="text-alternate">4 Glamis Avenue, Strathmore Park, Wellington 6022, New Zealand</Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 me-1">
                      <CsLineIcons icon="phone" size="17" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="text-alternate">+6443884455</Col>
                </Row>
                <Row className="g-0 mb-2">
                  <Col xs="auto">
                    <div className="sw-3 me-1">
                      <CsLineIcons icon="email" size="17" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="text-alternate">blaine@cottrell.com</Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl="8">
          {/* Recent Orders Start */}
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Recent Orders</h2>
            <Button variant="background-alternate" size="xs" className="btn-icon btn-icon-end p-0 text-small">
              <span className="align-bottom">View All</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
            </Button>
          </div>
          <div className="mb-5">
          {
            recentOrders.map((item, id)=>(
              <Card key={id} className="mb-2">
              <Card.Body className="sh-16 sh-md-8 py-0">
                <Row className="g-0 h-100 align-content-center">
                  <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                    <div className="text-muted text-small d-md-none">Id</div>
                    <NavLink to="/orders/detail" className="text-truncate h-100 d-flex align-items-center">
                      {item.OrderID}
                    </NavLink>
                  </Col>
                  <Col xs="6" md="4" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Price</div>
                    <div className="text-alternate">
                      <span>
                        <span className="text-small">$</span>
                       {item.Price}
                      </span>
                    </div>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">{item.Date}</div>
                  </Col>
                  <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 align-items-md-end">
                    <div className="text-muted text-small d-md-none">Status</div>
                    <Badge bg="outline-tertiary">{item.status}</Badge>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            ))
          }
          </div>
          
          {/* Recent Orders End */}
          {/* Recent Services start */}
          <h2 className="small-title">Recent Services</h2>
  {topProducts.map((item, id)=>(
          <div key={id}>
              <Card className="mb-2 sh-15 sh-md-6">
              <Card.Body className="pt-0 pb-0 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col xs="10" md="4" className="d-flex align-items-center mb-3 mb-md-0 h-md-100">
                    <div className="body-link stretched-link">
                     {item.ServiceName}
                    </div>
                  </Col>
                  <Col xs="2" md="3" className="d-flex align-items-center text-muted mb-1 mb-md-0 justify-content-end justify-content-md-start">
                    <Badge bg="outline-primary" className="me-1">
                    <span className="text-small">AED</span>
                      {item.Price}
                    </Badge>
                  </Col>
                  <Col xs="12" md="2" className="d-flex align-items-center mb-1 mb-md-0 text-alternate">
                    <span>
                      
                     {item.currentStatus}
                    </span>
                  </Col>
                  <Col xs="12" md="3" className="d-flex align-items-center justify-content-md-end mb-1 mb-md-0 text-alternate">
                  <Badge bg="outline-primary" className="me-1">
                  {item.TotalSales}
                  </Badge>
                    
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}

          {/* History Start */}
         
          {/* <Card className="mb-5">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1" />
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-1 heading text-start">
                          New Order
                        </Button>
                        <div className="text-alternate">21.12.2021</div>
                        <div className="text-muted mt-1">
                          Jujubes tootsie roll liquorice cake jelly beans pudding gummi bears chocolate cake donut. Jelly-o sugar plum fruitcake bonbon bear
                          claw cake cookie chocolate bar. Tiramisu soufflé apple pie.
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-1 heading text-start">
                          New Order
                        </Button>
                        <div className="text-alternate">15.10.2021</div>
                        <div className="text-muted mt-1">Biscuit donut powder sugar plum pastry. Chupa chups topping pastry halvah.</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-1 heading text-start">
                          New Order
                        </Button>
                        <div className="text-alternate">15.10.2021</div>
                        <div className="text-muted mt-1">Apple pie cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake.</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-1 heading text-start">
                          New Order
                        </Button>
                        <div className="text-alternate">15.10.2021</div>
                        <div className="text-muted mt-1">Marzipan muffin cheesecake. Caramels wafer jelly beans.</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                </Col>
                <Col className="mb-4">
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-1 heading text-start">
                          New Order
                        </Button>
                        <div className="text-alternate">15.10.2021</div>
                        <div className="text-muted mt-1">Dragée macaroon lemon drops icing cupcake gingerbread. Apple pie caramels tart.</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="g-0">
                <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                  <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                    <div className="line-w-1 bg-separator h-100 position-absolute" />
                  </div>
                  <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                    <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                  </div>
                  <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                </Col>
                <Col>
                  <div className="h-100">
                    <div className="d-flex flex-column justify-content-start">
                      <div className="d-flex flex-column">
                        <Button variant="link" className="p-0 pt-1 heading text-start">
                          Registered
                        </Button>
                        <div className="text-alternate">08.06.2021</div>
                        <div className="text-muted mt-1">Marshmallow donut sweet roll. Wafer tootsie roll gingerbread croissant ice cream.</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card> */}
          {/* History End */}

          
        </Col>
      </Row>
    </>
  );
};

export default CustomersDetail;
