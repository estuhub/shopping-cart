import { useEffect, useState } from 'react'
import { ItemsProps } from '../components/Item'

export const useFetchData = () => {
  const [items, setItems] = useState<ItemsProps[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const { products } = await response.json()
        setItems(products)
      } catch (error) {
        console.error('Error fetching dummy data:', error)
      }
    }

    fetchData()
  }, [])

  return items
}