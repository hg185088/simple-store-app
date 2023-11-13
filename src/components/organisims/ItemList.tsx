import React, { useEffect, useState } from 'react';
import { Item, Loading } from '..';
import style from '../../styles/ItemList.module.css';
import { getAllProductsWithReauth } from '../../api';
import { ActivatableItem } from '../molecules/ActivatableItem';

export interface ItemListProps {
  query?: string;
}

export const ItemList = (props: ItemListProps) => {
  const initialItems: Item[] = [
    { category: '', description: '', image: '', price: 0, title: '', id: 0 },
  ];
  const query = props.query;
  const [items, setItems] = useState<Item[]>(initialItems);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProductsWithReauth(query);
      const data = response.data;

      setItems(data);

      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <div className={style.container}>
      {items.map((value) => (
        <ActivatableItem item={value} />
      ))}
    </div>
  );
};
