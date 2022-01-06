import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterGray() {
    return (
        <>
            <footer className="footer footer-gray footer-white">
                <Container>
                    <Row>

                        <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                  , made  <i className="fa fa-heart heart" /> by Akuma
              </span>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default FooterGray;
