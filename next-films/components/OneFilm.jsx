import styles from './OneFilm.module.css'

export default function OneFilm({film}) {
  let {
    Title, Year, imdbID, Type, Poster
  } = film;
  return (
    <>
    <div className={styles.mar}>
      <fieldset>{Title}</fieldset>
      <fieldset>{Year}</fieldset>
      <fieldset>{imdbID}</fieldset>
      <fieldset>{Type}</fieldset>
      </div>
    </>
  )
}