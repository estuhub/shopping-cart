import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { useFetchData } from "../hooks/useFetchData"
import { formatCurrency } from "../utils/formatCurrency"

type CartItemProps = {
    id: number,
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const items  = useFetchData()
    const item = items.find(item => item.id === id)

    if (item == null) {
        return null
    }
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item.thumbnail}
                style={{
                    width: "125px",
                    height: "75px",
                    objectFit: 'cover'
                }}
            />
            <div className="me-auto">
                {/* item name and qty */}
                <div>
                    {item.name}{" "}
                    {quantity > 1 && <span className="text-muted" style={{ fontSize: "0.75em" }}>x{quantity}</span>}
                </div>
                {/* item price */}
                <div className="text-muted" style={{ fontSize:"0.75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            {/* total price x qty */}
            <div className="text-muted" style={{ fontSize:"0.75rem" }}>{formatCurrency(item.price * quantity)}</div>
            {/* remove button */}
            <Button 
                onClick={() => (removeFromCart(item.id))}
                variant="outline-danger"
                size="sm"
            >
                &times;
            </Button>
        </Stack>
    )
}