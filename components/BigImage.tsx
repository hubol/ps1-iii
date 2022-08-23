export function BigImage({ src }) {
    return (
        <div>
            <img src={src} />
            <style jsx>{`
                div {
                    height: 20vh;
                    display: flex;
                    justify-content: center;
                }
                img {
                    object-fit: contain;
                    max-width: 100%;
                    max-height: 100%;
                }
            `}</style>
        </div>
    );
}
