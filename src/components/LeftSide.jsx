import { Link } from "react-router-dom";
import BlogAsset from "./asset/BlogAsset";
import FacebookAsset from "./asset/FacebookAsset";
import InstaAsset from "./asset/InstaAsset";
import KakaoAsset from "./asset/KakaoAsset";

export default function LeftSide() {
    const SNS_ITEMS = [
        { icon: <FacebookAsset />, link: "https://facebook.com" },
        { icon: <BlogAsset />, link: "https://www.blog.naver.com" },
        { icon: <KakaoAsset />, link: "https://www.kakaocorp.com" },
        { icon: <InstaAsset />, link: "https://www.instagram.com" },
    ];
    return (
        <div className="flex flex-col w-full space-y-6 items-center">
            {SNS_ITEMS.map(({ icon, link }) => {
                return (
                    <Link to={link} key={icon}>
                        <div className="border w-10 h-10 border-neutral-300 group rounded-full flex justify-center items-center overflow-hidden">
                            {icon}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
