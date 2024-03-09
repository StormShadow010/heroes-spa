import { HeroList } from "../components"


export const DcPage = () => {
    return (
        <>
            <h1>Dc Comics</h1>
            <hr />
            <ul>
                <HeroList publisher={"DC Comics"} />
            </ul>
        </>
    )
}
