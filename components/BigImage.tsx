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
            `}</style>
        </div>
    );
}
