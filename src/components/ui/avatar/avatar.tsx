import "./avatar.scss";

const AvatarApp = ({ src, name }: { src: string, name: string }) => {
    return <img src={src} alt="Avatar" className="avatar" title={name} />;
}

export default AvatarApp;