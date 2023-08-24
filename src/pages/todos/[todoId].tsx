import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from 'components/layout';
import { getTodoDetails } from 'pages/api/todos/[todoId]';
import dbConnect from 'server/utils/dbConnect';

export default function Details({ todo }) {

  return (
    <Layout>
    <div className={'bg=gray-50 min-h-screen tex'}>
      <div className={'container p-2 xl:max-w-screen-xl mx-auto'}>
        <section
          className={
            'flex md:flex-row md:items-start md:justify-center gap-x-8 gap-y-8 flex-col'
          }
        >
          <h3>The Details</h3>
          <h1>{todo?.title}</h1>
          <h2>{todo?.description}</h2>
        </section>
      </div>
    </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  dbConnect();
  const { query } = context;
  const todo = await getTodoDetails(query);

  return {
    props: {
      todo: JSON.parse(JSON.stringify(todo)),
    },
  };
}
