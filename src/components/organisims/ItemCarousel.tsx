import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Item } from '../molecules/Item';
import { getAllProductsWithReauth } from '../../api';
import style from '../../styles/carousel.module.css';

export const ItemCarousel = () => {
  const initialItems: Item[] = [{ category: '', description: '', image: '', price: 0, title: '' }];
  const items = useRef<Item[]>(initialItems);
  const pointer = useRef<number>(0);
  const [group, setGroup] = useState<Item[]>(initialItems);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProductsWithReauth();
      console.log('fetching items...');
      const data = response.data;

      items.current = data;

      const [nextGroup, nextPointer] = nextSix(data, pointer.current);
      setGroup(nextGroup);
      pointer.current = nextPointer;

      setIsLoading(false);
    };

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const id = setInterval(handleRight, 5000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const handleRight = () => {
    const [nextGroup, nextPointer] = nextSix(items.current, pointer.current);
    setGroup(nextGroup);
    pointer.current = nextPointer;
  };

  const handleLeftButton = () => {
    pointer.current =
      pointer.current - 12 < 0
        ? items.current.length - ((12 - pointer.current) % items.current.length)
        : pointer.current - 12;
    const [nextGroup, nextPointer] = nextSix(items.current, pointer.current);
    setGroup(nextGroup);
    pointer.current = nextPointer;
  };

  return (
    <div className={style.container}>
      <div className={style.button} onClick={handleLeftButton}>
        {'<'}
      </div>
      <div className={style.carousel}>
        {group.map((item) => (
          <div className={style.inner}>
            <Item item={item} />
          </div>
        ))}
      </div>
      <div className={style.button} onClick={handleRight}>
        {'>'}
      </div>
    </div>
  );
};

const nextSix = (values: any[], pointer: number): [any[], number] => {
  const group: any[] = [];
  while (group.length < 6) {
    group.push(values[pointer]);
    pointer = (pointer + 1) % values.length;
  }
  return [group, pointer];
};
