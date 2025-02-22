interface Props {
    title :string,
    children:React.ReactNode
}
const ActorSelectList = ({title,children}:Props) => {
  return (
    <div className=" w-1/2">
    <div>
      <h2 className="text-center font-bold text-xl">{title}</h2>
    </div>
    <div>
      {children}
    </div>
  </div>  )
}

export default ActorSelectList