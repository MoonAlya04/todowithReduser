function TodoFooter({lentgh,completedsLength,clearCompleteds}) {
  return (
    <div className="w-[300px]  mt-[20px] flex justify-between" >
        <span>{completedsLength}/{lentgh}</span>
      <button className="bg-red-300" onClick={clearCompleteds}>Clear Completeds</button>
    </div>
  )
}

export default TodoFooter
