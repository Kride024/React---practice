Through react:
# Earlier, To create CourseCard is shown 3 times. Traditionally, you would have to copy paste each but with React.js you can 

# avoid duplicate code (Do not Repeat Yourself,DRY).

 # React.js application is just tree of such Components.

function CountryCard({country}: {country:Country}){
    return(
        <link to={`/${country.name.official.toLowerCase()}`} className={style.countryCard}>
    <img srd={country.flags.svg} alt={country.flag.alt}/>
    <p className={styles.countryTitle}>{country.name.official</p>
    <div>
    <p>
    <span className={style.infoTopic}>Population:</span>
    {country.population.toLocale.String()}
    </p>
    <p>
    <span className={style.infoTopic}>Region:</span>
    {country.region}
    </p>
    <p>
    <span Capital: className={styles.infoTopic}>Capital:</span> {country.capital[0]}</p>
    </div>
    
    </div>
    
    
    );
}