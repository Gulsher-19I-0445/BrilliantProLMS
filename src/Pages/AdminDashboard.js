import DashDetails from "../Components/DashDetails";
import AdminNavbar from "../Components/adminNavbar";
import { useState, useEffect } from 'react';
export default function AdminDashboard() {
    


  const [people, setPeople] = useState([]);
  const [courses, setCourses] = useState([]);
  const [counts, setCounts] = useState({});

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [assignmentsCountRes, courseCountRes, learnCountRes] = await Promise.all([
          fetch('http://localhost:8000/assignmentsCount'),
          fetch('http://localhost:8000/CourseCount'),
          fetch('http://localhost:8000/learnCount')
        ]);
        const [assignmentsCount, courseCount, learnCount] = await Promise.all([
          assignmentsCountRes.json(),
          courseCountRes.json(),
          learnCountRes.json()
        ]);
        setCounts({ assignmentsCount: assignmentsCount.count, courseCount: courseCount.count, learnCount: learnCount.count });
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCounts();
  }, []);
  // rest of the component code

    return (
        <>
            <AdminNavbar></AdminNavbar>
            <header class="bg-white shadow">
                <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                        Dashboard
                    </h1>
                </div>
            </header>
            <main>
                <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>
            </main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <DashDetails aC={counts.assignmentsCount} lC={counts.learnCount} cC={counts.courseCount}></DashDetails>
            </div>
        </>
    );
}
