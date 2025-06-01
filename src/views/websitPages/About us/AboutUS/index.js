
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Badge, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';
import { SubTitle } from 'chart.js';

const AboutUS = () => {
  const ProductData = [
    {
      id: 1,
      img: '/img/product/small/product-1.png',
      Title:'water Tanker',
      SubTitle: 'salt water',
      option: true,
    },
    {
      id: 2,
      img: '/img/product/small/product-2.png',
      Title:'water Tanker',
      SubTitle: 'salt water',
      option: true,
    },
  ];
  const title = 'About Us List';
  const description = 'About us List Page';
  const allItems = [1];
  const [selectedItems, setSelectedItems] = useState([]);
  const checkItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((x) => x !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
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
      {/* Page Title */}
      <div className="page-title-container">
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
            <Button variant="outline-primary" className="btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
              <CsLineIcons icon="plus" /> <span>Add New About Us</span>
            </Button>
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none">
              <CsLineIcons icon="sort" />
            </Button>
            <div className="btn-group ms-1 check-all-container">
              <CheckAll
                allItems={allItems}
                selectedItems={selectedItems}
                onToggle={toggleCheckAll}
                inputClassName="form-check"
                className="btn btn-outline-primary btn-custom-control py-0"
              />
              <Dropdown align="end">
                <Dropdown.Toggle className="dropdown-toggle dropdown-toggle-split" variant="outline-primary" />
                <Dropdown.Menu>
                 
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Row className="mb-3 pt-3">
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
      </div>
      {/* List Header */}
      <Row className="g-0 mb-2 d-none d-lg-flex">
        <Col xs="2" className="sw-0 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 align-items-center text-start">
            <Col className="pe-2"><div className="text-muted text-small">About us Image</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Title</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Subtitle</div></Col>
            
            
            <Col><div className="text-muted text-small">Select</div></Col>
          </Row>
        </Col>
      </Row>
      {/* Product List */}
      {ProductData.map((item) => (
        <Row key={item.id} className="g-0 mb-2 align-items-center border-bottom pb-2">
          <Col xs="2" className="sw-0 d-none d-lg-flex" />
          <Col>
            <Row className="g-0 align-items-center text-start">
              <Col className="pe-2">
                <div>
                  <img src={item.img} alt="product" className="card-img card-img-horizontal sw-11 h-100" />
                </div>
              </Col>
              
              <Col className="pe-2">
                <div className="lh-1 text-alternate">{item.Title}</div>
              </Col>
              <Col className="pe-2">
                <div className="lh-1 text-alternate">{item.SubTitle}</div>
              </Col>
              
              <Col>
                <Form.Check
                style={{marginLeft:"10px"}}
                  className="form-check mt-2"
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => checkItem(item.id)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-5">
        <Pagination>
          <Pagination.Prev className="shadow" disabled>
            <CsLineIcons icon="chevron-left" />
          </Pagination.Prev>
          <Pagination.Item className="shadow" active>1</Pagination.Item>
          <Pagination.Item className="shadow">2</Pagination.Item>
          <Pagination.Item className="shadow">3</Pagination.Item>
          <Pagination.Next className="shadow">
            <CsLineIcons icon="chevron-right" />
          </Pagination.Next>
        </Pagination>
      </div>
    </>
  );
};
export default AboutUS;

