import React, { useState } from 'react';
import { Card, Col, Dropdown, Row, Button, Badge } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Tracking = () => {
  const title = 'Admin Order Tracking';
  const description = 'Dashboard to manage and track all orders';

  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      orderDate: '2025-04-25',
      dueDate: '2025-04-29',
      status: 'In Progress',
    },
    {
      id: 'ORD002',
      orderDate: '2025-04-20',
      dueDate: '2025-04-25',
      status: 'Delivered',
    },
    {
      id: 'ORD003',
      orderDate: '2025-04-22',
      dueDate: '2025-04-26',
      status: 'Late',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return <Badge bg="success">Delivered</Badge>;
      case 'In Progress':
        return <Badge bg="info">In Progress</Badge>;
      case 'Late':
        return <Badge bg="danger">Late</Badge>;
      case 'Cancelled':
        return <Badge bg="secondary">Cancelled</Badge>;
      default:
        return <Badge bg="warning">{status}</Badge>;
    }
  };

  const getCountByStatus = (status) =>
    orders.filter((order) => order.status === status).length;

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0 mb-4">
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <div className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/products">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Tracking</span>
            </div>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
        </Row>

        {/* Summary Cards */}
        <Row className="mb-5 g-2 text-center" style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
          {[
            { label: 'Total Orders', value: orders.length , img: '/img/svg/onBack_order.svg'},
            { label: 'In Progress', value: getCountByStatus('In Progress'), img: '/img/svg/order_processing.svg' },
            { label: 'Delivered', value: getCountByStatus('Delivered'), img: '/img/svg/total_product.svg' },
            { label: 'Late', value: getCountByStatus('Late'), img: '/img/svg/pending_complaints.svg' },
            { label: 'Cancelled', value: getCountByStatus('Cancelled'), img: '/img/svg/out_of_stock.svg' },
          ].map((item, idx) => (
            <Col key={idx} xs="6" md="4" lg="2">
              <Card className="h-100 hover-scale-up cursor-pointer">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <img src={item.img} alt="pic" className="text-primary" />
                  </div>
                  <Card.Title>{item.label}</Card.Title>
                  <h2>{item.value}</h2>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Table Header */}
        {/* Header Row */}
<Row className="g-0 mb-2 d-none d-lg-flex align-items-start text-center">
  <Col xs="3" className="sw-0 d-none d-lg-flex" />
  <Col className="pe-2"><div className="text-muted text-small">Order ID</div></Col>
  <Col className="pe-2"><div className="text-muted text-small">Order Date</div></Col>
  <Col className="pe-2"><div className="text-muted text-small">Due Date</div></Col>
  <Col className="pe-2"><div className="text-muted text-small">Status</div></Col>
  <Col className="pe-2"><div className="text-muted text-small">Action</div></Col>
</Row>

{/* Orders List */}
{orders.map((order) => (
  <Row key={order.id} className="g-0 mb-2 align-items-center text-center border-bottom pb-2">
    <Col xs="3" className="sw-0 d-none d-lg-flex" />
    <Col className="pe-2">
      <div className="lh-1 text-alternate">{order.id}</div>
    </Col>
    <Col className="pe-2">
      <div className="lh-1 text-alternate">{order.orderDate}</div>
    </Col>
    <Col className="pe-2">
      <div className="lh-1 text-alternate">{order.dueDate}</div>
    </Col>
    <Col className="pe-2">
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-primary"
          size="sm"
          className="py-1 px-2 rounded-pill d-flex align-items-center"
          style={{ minWidth: '110px', justifyContent: 'center' }}
        >
          <span className="me-1">{getStatusBadge(order.status)}</span>
          <CsLineIcons icon="chevron-down" size="12" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {['In Progress', 'Delivered', 'Late', 'Cancelled'].map((statusOption) => (
            <Dropdown.Item
              key={statusOption}
              onClick={() => handleStatusChange(order.id, statusOption)}
            >
              {statusOption}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Col>
    <Col className="pe-2">
      <Badge bg="outline-primary">View</Badge>
    </Col>
  </Row>
))}

      </div>
    </>
  );
};

export default Tracking;
