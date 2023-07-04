import Logo from "../png/logo_hamo.png";
export default function LogoAsset({ width }) {
    return (
        <div>
            <img className={`${width}`} src={Logo} alt="main logo" />
        </div>
    );
}
