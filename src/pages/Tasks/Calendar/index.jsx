function Calendar() {
  const date = new Date();

  return (
    <div className='mt-10'>
      <h1 className='text-2xl text-white'>
        {date.toLocaleString("en-US", { month: "long" })} {date.getDay()}
      </h1>
      <p className='text-sm mt-2'>6 works today</p>
    </div>
  );
}

export default Calendar;
