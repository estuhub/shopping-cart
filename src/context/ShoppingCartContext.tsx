import { ReactNode, createContext, useContext, useState } from "react";

// ts
type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: number,
    quantity: number
}

// create context
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

// create provider
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [ cartItems, setCartItems ] = useState<CartItem[]>([])

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number) {
        setCartItems( currItems => {
            if (currItems.find(item => item.id === id) == null) {
                // if item not in cart, add 1
                return [...currItems, { id, quantity: 1 }]
            } else {
                // if item in cart, if same id, add 1
                return currItems.map(item => {
                    return item.id === id ? {...item, quantity: item.quantity + 1} : item
                })
            }
        })
    }

    function decreaseCartQuantity(id: number) {
        setCartItems( currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                // if item in cart, if qty is 1, remove it
                return currItems.filter(item => item.id !== id)
            } else {
                // if item in cart, if same id and qty > 1, remove 1
                return currItems.map(item => {
                    return item.id === id ? {...item, quantity: item.quantity - 1} : item
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => currItems.filter(item => item.id !== id))
    }

    return (
        <ShoppingCartContext.Provider 
            value={{ 
                getItemQuantity, 
                increaseCartQuantity, 
                decreaseCartQuantity,
                removeFromCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}