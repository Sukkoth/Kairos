import Task from "./Task";
function Tasks() {
  const tasks = [
    {
      id: 1,
      type: "ongoing",
      title: "App Design",
      startTime: "10:22",
      endTime: "12:00",
    },
    {
      id: 2,
      type: "pending",
      title: "Website Redesign",
      startTime: "09:30",
      endTime: "11:45",
    },
    {
      id: 3,
      type: "completed",
      title: "Product Launch",
      startTime: "13:45",
      endTime: "15:15",
    },
    {
      id: 4,
      type: "canceled",
      title: "Client Meeting",
      startTime: "11:00",
      endTime: "12:30",
    },
    {
      id: 5,
      type: "ongoing",
      title: "Mobile App Development",
      startTime: "10:45",
      endTime: "14:00",
    },
    {
      id: 6,
      type: "pending",
      title: "Marketing Campaign",
      startTime: "14:00",
      endTime: "16:30",
    },
    {
      id: 7,
      type: "completed",
      title: "Training Session",
      startTime: "09:00",
      endTime: "10:30",
    },
    {
      id: 8,
      type: "canceled",
      title: "Team Building",
      startTime: "15:30",
      endTime: "17:00",
    },
    {
      id: 9,
      type: "ongoing",
      title: "UI/UX Workshop",
      startTime: "13:00",
      endTime: "15:45",
    },
    {
      id: 10,
      type: "pending",
      title: "Client Demo",
      startTime: "16:15",
      endTime: "18:00",
    },
  ];

  return (
    <ul className='mt-10 list-none space-y-3'>
      {tasks.map((task) => (
        <li key={task.title}>
          <Task {...task} />
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
