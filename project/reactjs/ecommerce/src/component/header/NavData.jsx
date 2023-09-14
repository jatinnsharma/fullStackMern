import { navData } from "../../constants/data"

const NavData = () => {
  return (
    <div className="flex text-center gap-9">
        {
            navData.map(item=>(
              <div className="pl-6">
                <img className="h-24" src={item.url} alt="shopping"/>
                <p>{item.text}</p>
              </div>
            ))
        }
    </div>
  )
}

export default NavData