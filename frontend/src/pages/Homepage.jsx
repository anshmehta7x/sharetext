import {Link} from 'react-router-dom'

function Homepage(){
    return <div>
        <Link to={"/create"}>Create</Link>
        <br></br>
        <Link to="/login">Login</Link>
    </div>
}

export default Homepage
