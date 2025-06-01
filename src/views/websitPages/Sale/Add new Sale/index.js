import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';
import Active from 'components/quill/Active';
import { Row, Col, Button, Dropdown, Form, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import DetailImage from 'views/products/detail/components/DetailImage';
import DetailGallery from 'views/products/detail/components/DetailGallery';

const AddSale = () => {
  const title = 'Add new sale';
  const description = 'Add new sale Page';

  // Editor
  const theme = 'bubble';
  const modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike'], [{ header: [1, 2, 3, 4, 5, 6, false] }], [{ list: 'ordered' }, { list: 'bullet' }], [{ align: [] }]],
    active: {},
  };
  const { quill, quillRef, Quill } = useQuill({ theme, modules });
  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {});
      quill.clipboard.dangerouslyPasteHTML(`<h6>Candy Muffin</h6>
      <p>
        Marshmallow halvah gummi bears dragée. Pudding tart macaroon jelly beans bonbon. Dessert ice cream sweet powder topping biscuit
        gummies jujubes. Candy muffin croissant. Gummi bears jelly beans tootsie roll powder macaroon. Danish brownie cake bar candy.
      </p>
      <p><br /></p>
      <h6>Fruitcake</h6>
      <p>
        Sugar plum fruitcake cotton candy lemon drops. Carrot cake bear claw fruitcake dragée pie cotton candy sesame snaps lollipop
        croissant. Croissant brownie pie. Candy sweet roll pudding pastry cotton candy donut apple pie cotton candy cookie. Icing cake
        donut. Topping candy canes fruitcake. Brownie danish cake. Marshmallow donut sweet roll. Wafer tootsie roll gingerbread croissant
        ice cream.
      </p>
      <p><br /></p>
      <h6>Gummi Bears</h6>
      <p>
        Dessert ice cream sweet powder topping biscuit gummies jujubes. Candy muffin croissant. Gummi bears jelly beans tootsie roll powder
        macaroon. Danish brownie cake gingerbread tiramisu chocolate bar candy. Jujubes apple pie tootsie roll topping croissant bear claw
        tootsie roll.Pastry cake bear claw marzipan jelly beans pastry lemon drops. Tart powder dragée cotton candy sugar plum jelly beans
        pastry tart sugar plum. Dragée jelly beans halvah chupa chups icing tart cake tootsie roll lemon drops.
      </p>`);
      quill.blur();
    }
  }, [quill]);
  if (Quill && !quill) {
    Quill.debug('error');
    Quill.register('modules/active', Active);
  }

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/products">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Sales</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            {/* <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1">
              <CsLineIcons icon="save" />
            </Button> */}
            <div className="btn-group ms-1 w-100 w-sm-auto">
              <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-sm-auto">
                <CsLineIcons icon="save" /> <span>save</span>
              </Button>
              {/* <Dropdown>
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

      <Row>
        <Col xl="8">
          {/* Rental Info Start */}
          <h2 className="small-title">Sale Information</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form>
                <div className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" defaultValue=" " placeholder="Title" />
                </div>
                <div className="mb-3">
                  <Form.Label>
                    Subitle</Form.Label>
                  <Form.Control type="text" defaultValue=" " placeholder="subitle" />
                </div>
                <div>
                <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={4} defaultValue="" />
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* Rental Info End */}

          

          {/* Prices Info */}
       
        </Col>

        <Col xl="4">
          {/* Image Start */}
          <h2 className="small-title">Image (maximum 3 images can be drop)</h2>
          <Card className="mb-5">
            <Card.Body>
              <DetailImage 
              maxFiles={3}/>
            </Card.Body>
          </Card>
          {/* Image End */}

          {/* Gallery Start */}
          {/* <h2 className="small-title">Gallery</h2>
          <Card className="mb-5">
            <Card.Body>
              <DetailGallery />
            </Card.Body>
          </Card> */}
          {/* Gallery End */}
        </Col>
      </Row>
    </>
  );
};

export default AddSale;
