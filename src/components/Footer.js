import './styles/footerstyle.css';

function Footer() {
    return(
        <div className="footer">
            <table>
                <tbody>
                <tr>
                    <td>
                        Contact Us
                    </td>
                    <td>
                        Follow Us
                    </td>
                    <td>
                        Location
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://wa.me/+96181206590" target="_blank" rel="noreferrer"> +961 81 206590</a>
                    </td>
                    <td>
                        <a href="https://www.instagram.com/shakentake_store/" target="_blank" rel="noreferrer">shakentake_store</a>
                    </td>
                    <td>
                        <a href="https://www.google.com/maps/place/ShakeNTake/@33.8489692,35.9262763,21z/data=!4m6!3m5!1s0x1518cb066df5e7b3:0xcfd93054eab57186!8m2!3d33.8489445!4d35.9263199!16s%2Fg%2F11l1dk6lr7?entry=ttu" target="_blank" rel="noreferrer">Karak Nouh, Zahle</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Footer;