import React, { useState, useEffect } from 'react'

import { JobsService } from '../services/job.service';
import LeftItem from './LeftItem';


function LeftList({filters, onShowMoreDepartments}) {
  const departmentDisplayCount = 10;
  const departmentCount = filters.department.length;
  const departments = filters.department;
  const departmentsToShow = departments.slice(0, Math.min(departmentDisplayCount, departmentCount));
  return (
    <div>
      <LeftItem name="job_type" contents={filters.job_type} />
      <LeftItem name="department" contents={departmentsToShow} hasDetail= {departmentCount > departmentDisplayCount} onShowMore={onShowMoreDepartments}  />
      <LeftItem name="work_schedule" contents={filters.work_schedule}  />
      <LeftItem name="experience" contents={filters.experience}  />
    </div>
  );
}

export async function getStaticProps(context) {
  console.log('hello, aleksei');
  const filters = await JobsService.filters();
  return {
    props: {
      filters,
    }, // will be passed to the page component as props
  }
}


export default LeftList;
