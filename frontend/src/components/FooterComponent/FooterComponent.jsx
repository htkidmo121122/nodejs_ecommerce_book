import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function FooterComponent() {
  return (
    
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ fontSize: '15px'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ color: '#fff', background:  '#739072', borderBottom: '5px solid black'}} >
        <div className='me-5 d-none d-lg-block'>
          <span style={{ paddingLeft: '95px'}} >Chào mừng đến với Huflit Book</span>
        </div>

        <div style={{ paddingRight: '95px'}} >
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                HUFLIT STORE BOOK
              </h6>
              <p>
                Chào mừng đên với chuỗi cửa hàng online sách số 1 TPHCM
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Sản Phẩm</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              {/* <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p> */}
              <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2900403237063!2d106.59805157506176!3d10.865530357543802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b088de30f3b%3A0xd2140740d360f705!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ2_huqFpIG5n4buvIC0gVGluIGjhu41jIFRQLiBIQ00gKEhVRkxJVCkgLSBDxqEgc-G7nyBIw7NjIE3DtG4!5e0!3m2!1svi!2s!4v1709315766030!5m2!1svi!2s'
            className='h-100 w-100'
            style={{ border: '0' }}
            loading='lazy'
          ></iframe>
          
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                10 QL22, Tân Xuân, Hóc Môn, Thành phố Hồ Chí Minh, Việt Nam
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                https://huflit.edu.vn
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +84 0283 863 2052
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +84 0623 323 1123
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='http://localhost:3000/'>
          huflitbook.com
        </a>
      </div>
    </MDBFooter>
  );
}