import FaceBook from "../png/facebook.png";
export default function FacebookAsset() {
    return (
        <div>
            <img
                src={FaceBook}
                alt="facebookLogo"
                className="w-6 h-6 group-hover:w-10 group-hover:h-10 transition-all duration-200"
            />
        </div>
    );
}
