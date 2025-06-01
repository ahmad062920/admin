import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Badge, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';

const OrdersList = () => {
  const title = 'Orders List';
  const description = 'Ecommerce Orders List Page';

  const Orders=[
    {
      id: 1,
      customerId: 2,
      customerName: 'Joisse Kaycee',
      PaymentMethod: 'cash on delivery',
      DeliveryStatus: 'complete',
      Amount: '60.5',
    },
    {
      id: 2,
      customerId: 3,
      customerName: 'Joisse Kaycee',
      PaymentMethod: 'cash on delivery',
      DeliveryStatus: 'complete',
      Amount: '60.5',
    },
  ]

  const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedItems, setSelectedItems] = useState([]);
  const checkItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const toggleCheckAll = (allSelect) => {
    if (allSelect) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Home</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none">
              <CsLineIcons icon="sort" />
            </Button>
            <div className="btn-group ms-1 check-all-container">
              <CheckAll
                allItems={allItems}
                selectedItems={selectedItems}
                onToggle={toggleCheckAll}
                inputClassName="form-check"
                className="btn btn-outline-primary btn-custom-control "
              />
              {/* <Dropdown align="end">
                <Dropdown.Toggle className="dropdown-toggle dropdown-toggle-split" variant="outline-primary" />
                <Dropdown.Menu>
                  <Dropdown.Item>Move</Dropdown.Item>
                  <Dropdown.Item>Archive</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>

      <Row className="mb-3">
        <Col md="5" lg="3" xxl="2" className="mb-1">
          {/* Search Start */}
          <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
            <Form.Control type="text" placeholder="Search" />
            <span className="search-magnifier-icon">
              <CsLineIcons icon="search" />
            </span>
            <span className="search-delete-icon d-none">
              <CsLineIcons icon="close" />
            </span>
          </div>
          {/* Search End */}
        </Col>
        <Col md="7" lg="9" xxl="10" className="mb-1 text-end">
          {/* Print Button Start */}
          {/* <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Print</Tooltip>}>
            <Button variant="foreground-alternate" className="btn-icon btn-icon-only shadow">
              <CsLineIcons icon="print" />
            </Button>
          </OverlayTrigger> */}
          {/* Print Button End */}

          {/* Export Dropdown Start */}
          {/* <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
            <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Export</Tooltip>}>
              <Dropdown.Toggle variant="foreground-alternate" className="dropdown-toggle-no-arrow btn btn-icon btn-icon-only shadow">
                <CsLineIcons icon="download" />
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu className="shadow dropdown-menu-end">
              <Dropdown.Item href="#">Copy</Dropdown.Item>
              <Dropdown.Item href="#">Excel</Dropdown.Item>
              <Dropdown.Item href="#">Cvs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          {/* Export Dropdown End */}

          {/* Length Start */}
          <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
            <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Item Count</Tooltip>}>
              <Dropdown.Toggle variant="foreground-alternate" className="shadow sw-13">
                10 Items
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu className="shadow dropdown-menu-end">
              <Dropdown.Item href="#">5 Items</Dropdown.Item>
              <Dropdown.Item href="#">10 Items</Dropdown.Item>
              <Dropdown.Item href="#">20 Items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Length End */}
        </Col>
      </Row>

      {/* List Header Start */}
      <Row className="g-0 h-100 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
  <Col md={2}><div className="text-muted text-small cursor-pointer sort">Customer ID</div></Col>
  <Col md={3}><div className="text-muted text-small cursor-pointer sort">Name</div></Col>
  <Col md={2}><div className="text-muted text-small cursor-pointer sort">Amount</div></Col>
  <Col md={2}><div className="text-muted text-small cursor-pointer sort">Payment Method</div></Col>
  <Col md={2}><div className="text-muted text-small cursor-pointer sort">Delivery Status</div></Col>
  <Col md={1}><div className="text-muted text-small cursor-pointer sort text-end">Select</div></Col>
</Row>

      {/* List Header End */}

      
      
      {/* List Items Start */}
{Orders.map((item) => (
  <Card key={item.id} className={`mb-2 ${selectedItems.includes(item.id) && 'selected'}`}>
    <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
      <Row className="g-0 h-100 align-content-center cursor-default" onClick={() => checkItem(item.id)}>
        <Col md={2} className="d-flex align-items-center">
          <NavLink to="/orders/detail" className="text-truncate">{item.customerId}</NavLink>
        </Col>
        <Col md={3} className="d-flex align-items-center">
          <div className="text-alternate">{item.customerName}</div>
        </Col>
        <Col md={2} className="d-flex align-items-center">
          <div className="text-alternate">
            <span className="text-small">AED</span> {item.Amount}
          </div>
        </Col>
        <Col md={2} className="d-flex align-items-center">
          <div className="text-alternate">{item.PaymentMethod}</div>
        </Col>
        <Col md={2} className="d-flex align-items-center">
          <Badge bg="outline-primary">{item.DeliveryStatus}</Badge>
        </Col>
        <Col md={1} className="d-flex align-items-center justify-content-end">
          <Form.Check
            type="checkbox"
            className="form-check mt-1"
            checked={selectedItems.includes(item.id)}
            onChange={() => checkItem(item.id)}
          />
        </Col>
      </Row>
    </Card.Body>
  </Card>
))}
{/* List Items End */}

      

      {/* Pagination Start */}
      <div className="d-flex justify-content-center mt-5">
        <Pagination>
          <Pagination.Prev className="shadow" disabled>
            <CsLineIcons icon="chevron-left" />
          </Pagination.Prev>
          <Pagination.Item className="shadow" active>
            1
          </Pagination.Item>
          <Pagination.Item className="shadow">2</Pagination.Item>
          <Pagination.Item className="shadow">3</Pagination.Item>
          <Pagination.Next className="shadow">
            <CsLineIcons icon="chevron-right" />
          </Pagination.Next>
        </Pagination>
      </div>
      {/* Pagination End */}
    </>
  );
};

export default OrdersList;
