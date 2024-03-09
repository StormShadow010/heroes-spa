import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

import queryString from "query-string"
import { getHeroesByName } from "../helpers"
import { HeroCard } from "../components"

export const SearchPage = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const { q = "" } = queryString.parse(location.search)

    const heroes = getHeroesByName(q)

    const ShowSearch = (q.length === 0)

    const ShowError = (q.length > 0) && (heroes.length === 0)

    const { searchText, onInputChange } = useForm({
        searchText: q,
    })

    const onSearchSumbit = (event) => {
        event.preventDefault()

        // if (searchText.trim().length <= 1) return

        navigate(`?q=${searchText}`)
    }



    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSumbit}>
                        <input type="text" name="searchText" autoComplete="off" id="" placeholder="Search a hero" className="form-control" value={searchText} onChange={onInputChange} />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results:</h4>
                    <hr />

                    {/* {
                        (q === '')
                            ? <div className="alert alert-primary">Search a hero</div>
                            : (heroes.length === 0) && <div className="alert alert-danger">No exists hero <b>{q}</b></div>
                    } */}

                    <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: ShowSearch ? '' : 'none' }}>
                        Search a hero
                    </div>

                    <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: ShowError ? '' : 'none' }}>
                        No exists hero <b>{q}</b>
                    </div>

                    {
                        heroes.map(heroe => {
                            return (
                                <HeroCard key={heroe.id} {...heroe} />
                            )
                        })
                    }
                    {/* <HeroCard /> */}
                </div>
            </div>
        </>
    )
}
