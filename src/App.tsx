// eslint-disable

/**
 * @module App
 * @requires React
 * @requires LastNews
 * @requires Currency
 * @requires HeaderAd
 * @requires SearchEngine
 * @requires BodyAd
 * @requires BodyComponents
 */

/**
 * Главный компонент приложения.
 * 
 * @returns {JSX.Element} - JSX-элемент компонента App.
 */

function App() {

  return (
    <>
      <LastNews />
      <Currency />
      <HeaderAd />
      <SearchEngine />
      <BodyAd />
      <BodyComponents />
    </>
  )
}

export default App
