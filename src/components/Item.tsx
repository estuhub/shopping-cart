import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"

type ItemsProps = {
    id: number,
    name: string,
    price: number,
    img: string
}

export function Item({ id, name, price, img }: ItemsProps) {
    let quantity = 1
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={img} height="200px" style={{ objectFit: "cover"}}  />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <span>{name}</span>
                    <span className="text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {
                        quantity === 0 ? 
                        <Button className="w-100">+ Add to Cart</Button> :
                        <div 
                            className="d-flex align-items-center flex-column"
                            style={{ gap: "0.5rem"}}
                        >
                            <div 
                                className="d-flex align-items-center" 
                                style={{ gap: "0.5rem"}}
                            >
                                    <Button>-</Button>
                                    <span className="fs-3">{quantity}</span> in cart
                                    <Button>+</Button>
                            </div>
                            <Button className="border-danger bg-danger">Remove</Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}