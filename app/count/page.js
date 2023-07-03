export default function Counter() {
  return (
    <div className='flex items-center justify-between w-36'>
      <button className='bg-blue-500 w-10 rounded-md text-3xl'>-</button>
      {/* Count state */}
      <h2 className='text-2xl'>0</h2>
      <button className='bg-blue-500 w-10 rounded-md text-3xl'>+</button>
    </div>
  );
}
