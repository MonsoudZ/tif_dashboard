import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./card.css"
import {title, body} from "../API call/Api"


export default function ProductCard(props) {
    const { _id, title, body, imgURL } = props;

    return (
        <Link
            to={`/products/${_id}`}
            className="link-product-card"
        >
            <Card
                className="card-product-card"
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <CardMedia
                    component="img"
                    src="https://wallpaperaccess.com/full/208107.jpg"
                    alt={title}
                    sx={{
                        height: "80%",
                        top: 0,
                        left: 0,
                        right: 0,
                        overflow: "hidden",
                        objectFit: "contain"
                    }}
                />
                <CardContent
                    sx={{
                        height: "40%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none"
                    }}
                >
                    <Typography
                        gutterBottom
                        noWrap
                        align="center"
                        sx={{
                            width: "90%",
                            fontSize: 22
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography x
                                gutterBottom
                                color="text.secondary"
                                sx={{
                                    fontSize: 18
                                }}
                    >
                        {body}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
