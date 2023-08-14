import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details(props) {

  return (
    <div className={'bg=gray-50 min-h-screen'}>
      <div className={'container p-2 xl:max-w-screen-xl mx-auto'}>
        <section
          className={
            'flex md:flex-row md:items-start md:justify-center gap-x-8 gap-y-8 flex-col'
          }
        >
          Detail Page
        </section>
      </div>
    </div>
  );
}
