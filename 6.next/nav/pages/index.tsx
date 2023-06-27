import Image from 'next/image'
import Header from '../components/header'
import React from 'react';

const List = ({ items, ...props }: { items: string[] }) => {
  const [filteredItems, setFilteredItems] = React.useState(items);
  const filterItems = (e: any) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) => item.startsWith(searchValue));

    setFilteredItems(matchingItems);
  };

  return (
    <>
      <input onChange={filterItems} />
      <ul {...props}>
        {filteredItems.map((item) => (
          <li key={item}>match item: {item}</li>
        ))}
      </ul>
    </>
  );
};

export default function Home() {

  return (
    <main>
      <Header />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Welcome to Mastering Next.js!</h1>
      </div>
      <br />
      <label>My Fancy List</label>
      <List aria-label="My Fancy List" items={['Learn React', 'Learn Next.js', '???', 'Profit']} />
    </main>
  )
}
