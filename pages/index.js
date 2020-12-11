import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Searchbar from "../components/SearchBar";
import Content from "../components/Content";


export default function Home() {
  return (
      <Layout>
          <Searchbar/>
          <Content />
      </Layout>
  )
}
