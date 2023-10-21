import { Col, Row } from "react-bootstrap"
import items from "../data/items.json"
import { Item } from "../components/Item"

export function Store() {
    return (
        <>
            <h1>Store</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {items.map(item => (
                    <Col key={item.id}>
                        <Item {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
