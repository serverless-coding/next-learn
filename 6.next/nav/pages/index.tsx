import React, { ReactElement } from 'react';
import Layout from '@/components/layout';
import NestedLayout from '@/components/nested-layout';

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

// add multity layout
//  https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#per-page-layouts
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}

export default function Home() {
  return (
    <main>
      <div>
        <h1>Welcome to Mastering Next.js!</h1>
      </div>
      <br />
      <label>My Fancy List</label>
      <List aria-label="My Fancy List" items={['Learn React', 'Learn Next.js', '???', 'Profit']} />
    </main>
  )
}


