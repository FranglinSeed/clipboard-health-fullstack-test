import React, { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Searchbar from "../components/SearchBar";
import Content from "../components/Content";

import { JobsService } from '../services/job.service';




export default function Home() {

  return (
      <Layout>
          <Searchbar/>
          <Content />
      </Layout>
  )
}
