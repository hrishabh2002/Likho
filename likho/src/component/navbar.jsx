import {Link} from 'react-router-dom'

const navbar=()=>{
   return <div className="flex justify-between h-16 items-center my-6">
            <div className=" text-primary font-bold text-mamoth">
              Likho
            </div>
            <div className='flex justify-evenly w-64 font-semibold'>
              <Link to="/" className='hov-effect'>Home</Link>
              <Link to="/create" className='hov-effect'>Create</Link>
              <Link to="/about" className='hov-effect'>About</Link>
              <Link to="/login" className='hov-effect'>Login</Link>
            </div>
         </div>
}
export default navbar;

