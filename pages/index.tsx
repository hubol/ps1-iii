import { BigImage } from "../components/BigImage";
import Link from "next/link";
import { Title } from "../components/Title";

export default function LandingPage() {
    return (
        <>
            <Title>You have ariiived</Title>

            <div id="root">
                <header>
                    <BigImage src="/logo-iii-animated.gif" />
                    <h1>Welcome to the iowa itinerant intranet.</h1>
                </header>
                <main>
                    <h2>SO WHAT IS iii?</h2>
                    <p>
                        iii or the iowa itinerant intranet is a curated local network that is only accessible within
                        immediate range of the iii device.
                    </p>

                    <h2>WHAT DOES THE iii HOLD?</h2>
                    <p>
                        iii functions as an internet, w/o the internet. It is purposefully disconnected, making
                        accessing its information bound to its physical location (wherever that may be).
                    </p>

                    <p>
                        It can hold games, pdfs, chat, boards, digital artwork, websites, music, movies, guest books,
                        etc… basically anything the internet holds (only w/o all the lame password inputting).
                    </p>

                    <BigImage src="/logo-ps1-possibility.png" />

                    <p>
                        WE WELCOME ALL IA ARTISTS TO TAKE UP SPACE ON iii. WE WELCOME ANYONE WITHIN PROXIMITY OF iii TO
                        ADD TO IT. WE WANT AN AUTONOMOUS SPACE TO SHARE OUR INFORMATION UNTETHERED TO THE SUCKY
                        CORPORATE INTERNET.
                    </p>

                    <div>
                        <Link href="/iiindex">
                            <button>Let me iiin</button>
                        </Link>
                    </div>
                </main>
            </div>

            <style jsx>{`
                h2 {
                    margin-bottom: 0.2em;
                }
                h2 + p {
                    margin-top: 0;
                }
                main > div:last-child {
                    display: flex;
                    justify-content: center;
                }
                button {
                    margin-top: 1em;
                }
            `}</style>
        </>
    );
}
