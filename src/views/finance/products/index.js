
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Badge, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';


const Products = () => {


    const [btnState, setbtnState] = useState(2);
    const [selectedPeriod, setSelectedPeriod] = useState('Last 7 Days');

    const handleSelectPeriod = (period) => {
      setSelectedPeriod(period);
    };
  const itemsData = [
    {
      id: 1,
      SKU: 'RR0001',
      ProductName: 'Domestic water filter',
      MainCatogry: 'Domestic',
      itemsSale: '100',
      Price: 'AED 70.00',
      totalSales: 'AED 990.00',
     
    },
  ];
  const rentData= [
    {
        id:1,
        ProductName: 'industrial water filter',
        MainCatogry: 'industrial',
        itemsRent: '100',
        RentPrice: 'AED 50.00',
        totalRent: 'AED 100020. 84'

    }
  ]
  const serviceData=[
    {
        id:1,
        serviceName: 'AMC',
        Price: 'AED 50.00',
        currentlyActive:'500',
        totalSubscrived:'1000',
        totalRevenue: 'AED 23442.00'
        
    }

  ]
  const title = 'Product List';
  const description = 'Ecommerce Product List Page';
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
                <NavLink to="/finance/analytics">
                <span>Analytic</span>
                </NavLink>
               
            </Button>
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none">
              <CsLineIcons icon="sort" />
            </Button>
            {/* <div className="btn-group ms-1 check-all-container">
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
            </div> */}
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
                 
                  <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
                    <OverlayTrigger  overlay={<Tooltip id="tooltip-top">Item Count</Tooltip>}>
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
      <Row className="mb-4 align-items-center">
  {/* Left side dropdown */}
  <Col xs="auto">
    <Dropdown className="d-inline-block">
      <OverlayTrigger
        delay={{ show: 1000, hide: 0 }}
        placement="top"
        overlay={<Tooltip id="tooltip-top">Select Time Period</Tooltip>}
      >
        <Dropdown.Toggle
          variant="foreground-alternate"
          className="shadow px-4 py-2"
          style={{ minWidth: '150px', backgroundColor: 'white', color: '#495057' }}
        >
          {selectedPeriod}
        </Dropdown.Toggle>
      </OverlayTrigger>

      <Dropdown.Menu className="shadow dropdown-menu-end min-w-[210px]">
        <Dropdown.Item onClick={() => handleSelectPeriod('Last 7 Days')}>
          Last 7 Days
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectPeriod('Last 30 Days')}>
          Last 30 Days
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectPeriod('This Year')}>
          This Year
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Col>

  {/* Right side buttons */}
  <Col className="d-flex justify-content-end gap-2">
    <Button
      variant={btnState === 0 ? 'primary' : 'outline-primary'}
      onClick={() => setbtnState(0)}
      className="px-4"
    >
      Buy
    </Button>
    <Button
      variant={btnState === 1 ? 'primary' : 'outline-primary'}
      onClick={() => setbtnState(1)}
      className="px-4"
    >
      Rent
    </Button>
    <Button
      variant={btnState === 2 ? 'primary' : 'outline-primary'}
      onClick={() => setbtnState(2)}
      className="px-4"
    >
      Services
    </Button>
  </Col>
</Row>

      

     
      {btnState === 0 ? (
  <>
  {/* List Header */}
  <Row className="g-0 mb-2 d-none d-lg-flex">
        <Col xs="3" className="sw-0 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 align-items-center text-center">
            <Col className="pe-2"><div className="text-muted text-small">SKU</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Product Name</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Main Category</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Items Sale</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Price</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Total Sales</div></Col>
           
          </Row>
        </Col>
      </Row>
    {/* Product List */}
    {itemsData.map((item) => (
      <Row key={item.id} className="g-0 mb-2 align-items-center border-bottom pb-2">
        <Col xs="3" className="sw-0 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 align-items-center text-center py-2">
            <Col className="pe-2">
              <div className="text-alternate">{item.SKU}</div>
            </Col>
            <Col className="pe-2">
              <div className="lh-1 text-alternate">{item.ProductName}</div>
            </Col>
            <Col className="pe-2">
              <div className="lh-1 text-alternate">{item.MainCatogry}</div>
            </Col>
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.itemsSale}</Badge>
            </Col>
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.Price}</Badge>
            </Col>
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.totalSales}</Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    ))}
  </>
) : null}

{/* {rent data} */}
{btnState === 1 ? (
  <>
  {/* List Header */}
  <Row className="g-0 mb-2 d-none d-lg-flex">
        <Col xs="3" className="sw-0 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 align-items-center text-center">
            <Col className="pe-2"><div className="text-muted text-small">Product Name</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Main Category</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Items Rent</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Rent Price</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Total Sales</div></Col>
           
          </Row>
        </Col>
      </Row>
    {/* Product List */}
    {rentData.map((item) => (
      <Row key={item.id} className="g-0 mb-2 align-items-center border-bottom pb-2">
        <Col xs="3" className="sw-0 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 align-items-center text-center py-2">
            <Col className="pe-2">
              <div className="text-alternate">{item.ProductName}</div>
            </Col>
            <Col className="pe-2">
              <div className="lh-1 text-alternate">{item.MainCatogry}</div>
            </Col>
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.itemsRent}</Badge>
            </Col>
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.RentPrice}</Badge>
            </Col>
            
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.totalRent}</Badge>
            </Col>
          </Row>
        </Col>
      </Row>
    ))}
  </>
) : null}

 {/* service data */}

 {btnState === 2 ? (
  <>
  {/* List Header */}
  <Row className="g-0 mb-2 d-none d-lg-flex">
        <Col xs="3" className="sw-0 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 align-items-center text-center">
            <Col className="pe-2"><div className="text-muted text-small">Service Name</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Price</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Currently Active</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Total Subscribed</div></Col>
            <Col className="pe-2"><div className="text-muted text-small">Total Sales</div></Col>
           
          </Row>
        </Col>
      </Row>
    {/* Product List */}
    {serviceData.map((item) => (
      <Row key={item.id} className="g-0 mb-2 align-items-center border-bottom pb-2">
        <Col xs="3" className="sw-0 d-none d-lg-flex" />
        <Col>
          <Row className="g-0 align-items-center text-center py-2">
            <Col className="pe-2">
              <div className="text-alternate">{item.serviceName}</div>
            </Col>
            <Col className="pe-2">
              <div className="lh-1 text-alternate">{item.Price}</div>
            </Col>
            <Col className="pe-2">
              <div className="lh-1 text-alternate">{item.currentlyActive}</div>
            </Col>
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.totalSubscrived}</Badge>
            </Col>
            <Col className="pe-2">
              <Badge bg="outline-primary">{item.totalRevenue}</Badge>
            </Col>
        
          </Row>
        </Col>
      </Row>
    ))}
  </>
) : null}


      
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
export default Products;