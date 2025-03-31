import React, { useEffect, useState } from 'react';
import { getSheetData } from '../googleSheets';

const SheetReader = ({ user }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const allTasks = await getSheetData();
        const userTasks = allTasks.filter(
          task => task['ID Patient']?.toString().includes(user.email)
        );
        setTasks(userTasks);
        console.log('📄 Filtered tasks for user:', user.email, userTasks);
      } catch (error) {
        console.error('❌ Failed to fetch sheet data:', error);
      }
    };

    fetchTasks();
  }, [user]);

  return (
    <div>
      <h2>משימות שלך</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task['Daily Task']} - {task['TaskDate']}</li>
        ))}
      </ul>
    </div>
  );
};

export default SheetReader;
