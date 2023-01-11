const alphabates = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                {alphabates.map((letter) => (
                    <li key={letter}>
                        <a href={`#${letter}`}>{letter}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};  
export default Nav;