const Nav = () => {


    return (
        <nav className="sidebar">
            <div className="profile">
                <img src={"defaultuser.png"} className="profile__img" alt="Profile picture" />
                <h2>Username</h2>
            </div>
            <div className="navlinks">
                <a href="#">Home</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
            </div>
        </nav>
    )
}

export default Nav