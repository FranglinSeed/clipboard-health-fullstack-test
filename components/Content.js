import React, { useEffect, useState } from 'react';
import RightBannar from './RightBannar';
import RightList from './RightList';
import LeftList from './LeftList';
import DepartmentsDialog from './DepartmentsDialog'
import Notification from './Notification';
import useDebounce from '../hook/debounce';
import { JobsService } from '../services/job.service';
import Waiting from './Waiting';

const defaultFilter = {
  job_type: [],
  work_schedule: [],
  experience: [],
  department: [],
};

const defaultNotification = {
  show: false,
  type: 'error',
  message: '',
};

const Content = () =>{
  const [isDepartmentDialogOpen, setDepartmentDialogOpen] = useState(false);
  const [isFiltersloading, setFiltersloading] = useState(true);
  const [filters, setFilters] = useState(defaultFilter);
  const [notification, setNotification] = useState(defaultNotification);

  const LoadFilters = async () => {
    setFiltersloading(true);
    try{
      const res = await JobsService.filters();
      setFilters(res);
    } catch (e) {
      showNotification('error', 'Loading Filters Error.');
    } finally {
      setFiltersloading(false);
    }
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
  };

  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 500);
  const [activeSortKey, setActiveSortKey] = useState(null);
  const [sortState, setSortState] = useState('asc');

  const [isJobsLoading, setJobsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [totalJobCount, setTotalJobCount] = useState(0);
  const loadJobs = async () => {
    setJobsLoading(true);
    try {
      const res = await JobsService.query(keyword, activeSortKey, sortState);
      setJobs(res);
      setTotalJobCount(res.reduce((sum, job) => sum + job.total_jobs_in_hospital, 0));
    } catch (e) {
      showNotification('error', 'Failed to fetch data from the server.');
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    LoadFilters();
  }, []);


  useEffect(() => {
    loadJobs();
  }, [debouncedKeyword, activeSortKey, sortState]);

  return(
    <section className="container mx-auto">
        <div className="m-2 md:m-4">
          { isFiltersloading || isJobsLoading ? <div className="flex justify-center items-center h-48"><Waiting size={10}/></div> : <div></div> }
            <div className="flex">
                <div className="hidden md:block md:w-64">
                    <LeftList filters = {filters} onShowMoreDepartments={() => setDepartmentDialogOpen(true)} />
                </div>
                <div className="w-full bg-white md:ml-4">
                    <RightBannar keyword={keyword} onKeywordChange={setKeyword}/>
                    <RightList />
                </div>
            </div>
        </div>
      { isDepartmentDialogOpen && <DepartmentsDialog departments={filters.department} onClose={() => setDepartmentDialogOpen(false)}/> }
      { notification.show && <Notification {...notification} onClose={() => setNotification({ show: false })}/> }
    </section>
    );
}

export default Content;
