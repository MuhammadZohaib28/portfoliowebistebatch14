import './header.css'

const Header = () => {

    const menuItems = [
        {
            name: "Home",
            link: "/home"
        },
        {
            name: "About Me",
            link: "/aboutme"
        },
        {
            name: "Services",
            link: "/services"
        },
        {
            name: "Portfolio",
            link: "/portfolio"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]

    return (
        <header>
            <h1>MAZHAR</h1>

            <ul>

                {menuItems.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}

            </ul>
        </header>
    )
}

export default Header