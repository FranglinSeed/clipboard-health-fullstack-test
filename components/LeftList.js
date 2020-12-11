import React from 'react'
import { JobsService } from '../services/job.service';

function LeftList(props) {
  return (
    <div>
      <p>{props.filters}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log('hello, world!');
  const filters = await JobsService.filters();
  return {
    props: {
      filters,
    }, // will be passed to the page component as props
  }
}

export default LeftList;
