import {Link} from 'react-router-dom'

const navbar=()=>{
   return <div className="nav-container">
            <div className="flex bg-red-600 justify-center text-lg">
              Likho
            </div>
            <div className="text-lg">
              <Link to="/">Home</Link>
              <Link to="/create">Create</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
            </div>
         </div>
}
export default navbar;