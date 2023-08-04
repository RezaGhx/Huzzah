import styles from '../styles/Home.module.css';
import {todos} from '@/constant/todos';

export default function Home() {
  return (
    <div>
      <h1 className={'bg-teal-700 text-2xl'}>Home Page</h1>
      {todos?.map(item => <h1 key={item.id} className={'bg-teal-100 text-blue-900 text-xl'}>Course No.{item.id} - {item.title}</h1>)}
    </div>
  );
}
