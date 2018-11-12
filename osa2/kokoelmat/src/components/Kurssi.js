import React from 'react'


const Kurssi = ({kurssi}) => (
    <div>
        <Otsikko kurssi = {kurssi} />
        <Sisalto osat = {kurssi.osat} />
    </div>
)

const Otsikko = ({kurssi}) => (
    <div>
        <h1>{kurssi.nimi}</h1>
    </div>
)

const Sisalto = ({osat}) => {
    return(
        <div>

            {osat.map(osa => 
                <div key={osa.id}>
                    <p>{osa.nimi} {osa.tehtavia}</p>
                </div>
            )}
            <p>Tehtäviä yhteensä {osat.map(osa => osa.tehtavia).reduce((acc, curr) => acc + curr)}</p>

        </div>
    )
}

export default Kurssi