import React from "react";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import DangerNavbar from "../Header/Navbar";
import FooterGray from "../Footer/Footer";

function BlogPosts(props) {
    const { _id, title, body, imgURL } = props;
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("blog-posts");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("blog-posts");
        };
    });
    return (
        <>
            <DangerNavbar />
            <div className="wrapper">
                <div className="main">
                    <div className="section section-white">
                        <Container>
                            <Row>
                                <Col className="ml-auto mr-auto text-center title" md="6">
                                    <h2>A place for storytelling</h2>
                                    <h3 className="title-uppercase">
                                        <small>Written by designers for designers</small>
                                    </h3>
                                </Col>
                            </Row>
                            <div className="article">
                                <Row>
                                    <Col className="ml-auto mr-auto" md="8">
                                        <Card className="card-blog card-plain text-center">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    />
                                                </a>
                                            </div>
                                            <CardBody>
                                                <div className="card-category">
                                                    <Badge className="main-tag" color="primary">
                                                        Featured
                                                    </Badge>
                                                </div>
                                                <a href="javascrip: void(0);">
                                                    <CardTitle tag="h3">
                                                        {title}

                                                    </CardTitle>
                                                </a>
                                                <div className="card-description">
                                                    <p>
                                                        {body}

                                                    </p>
                                                </div>
                                            </CardBody>
                                            <Button className="btn-round" color="danger" size="sm">
                                                Read more
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <hr />
                            <br />
                            <br />
                            <div className="article">
                                <Row>
                                    <Col className="ml-auto mr-auto" md="8">
                                        <Card className="card-blog card-plain text-center">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>

                                                    />
                                                </a>
                                            </div>

                                            <Button className="btn-round" color="danger" size="sm">
                                                Read more
                                            </Button>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <hr />
                            <br />
                            <br />
                            <div className="article">
                                <Col className="ml-auto mr-auto" md="8">
                                    <Card className="card-blog card-plain text-center">
                                        <div className="card-image">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>

                                                />
                                                <p className="image-thumb">Photo by Cam Adams</p>
                                            </a>
                                        </div>

                                        <Button className="btn-round" color="danger" size="sm">
                                            Read more
                                        </Button>
                                    </Card>
                                </Col>
                            </div>
                            <hr />
                            <Row>
                                <Col md="12">
                                    <div className="pull-left">
                                        <Button
                                            className="btn-link btn-move-left"
                                            color="default"
                                            size="sm"
                                        >
                                            <i className="fa fa-angle-left mr-1" />
                                            Older Posts
                                        </Button>
                                    </div>
                                    <div className="pull-right">
                                        <Button
                                            className="btn-link btn-move-right"
                                            color="default"
                                            size="sm"
                                        >
                                            Newer Posts <i className="fa fa-angle-right" />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
            <FooterGray />
        </>
    );
}

export default BlogPosts;