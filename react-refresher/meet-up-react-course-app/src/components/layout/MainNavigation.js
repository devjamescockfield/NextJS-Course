import {Link} from 'react-router-dom';

function MainNavigation() {
    return <header>
        <div>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                    <Link to='/new-meetup'>New Meetups</Link>
                    <Link to='/favorites'>My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;