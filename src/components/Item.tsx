import { Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"

type ItemsProps = {
    id: number,
    name: string,
    price: number,
    img: string
}

export function Item({ id, name, price, img }: ItemsProps) {
    return (
        <Card>
            <Card.Img variant="top" src={img} height="200px" style={{ objectFit: "cover"}}  />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <span>Name</span>
                    <span className="text-muted">{formatCurrency(price)}</span>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}