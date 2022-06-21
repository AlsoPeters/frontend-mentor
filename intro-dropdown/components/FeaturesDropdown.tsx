import Todo from '../public/photos/icon-todo.svg';
import Calendar from '../public/photos/icon-calendar.svg';
import Reminders from '../public/photos/icon-reminders.svg';
import Planning from '../public/photos/icon-planning.svg';

export default function FeaturesDropdown() {
  return (
    <div className='absolute flex flex-col gap-2 px-4 py-4 mt-4 bg-white rounded-lg -translate-x-14 drop-shadow-2xl text-start'>
      <div className='flex gap-4'>
        <Todo />
        <p className='hover:cursor-pointer'>Todo List</p>
      </div>
      <div className='flex gap-4'>
        <Calendar />
        <p className='hover:cursor-pointer'>Calendar</p>
      </div>
      <div className='flex gap-4'>
        <Reminders />
        <p className='hover:cursor-pointer'>Reminders</p>
      </div>
      <div className='flex gap-4'>
        <Planning />
        <p className='hover:cursor-pointer'>Planning</p>
      </div>
    </div>
  );
}
