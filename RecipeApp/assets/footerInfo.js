export const PageInfo = [
    {
      imgSrc: onHomePage ? homeLight : homeDark,
      pageName: 'home',
      styles: onHomePage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    },
    {
      imgSrc: onOptionsPage ? OptionsLight : OptionsDark,
      pageName: 'options',
      styles: onOptionsPage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    },
    {
      imgSrc: onRecipesPage ? RecipesLight : RecipesDark,
      pageName: 'recipes',
      styles: onRecipesPage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    },
    {
      imgSrc: onProfilePage ? ProfileLight : ProfileDark,
      pageName: 'profile',
      styles: onProfilePage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    },
    {
      imgSrc: onLoginPage ? LoginLight : LoginDark,
      pageName: 'login',
      styles: onLoginPage ? {flex: 1, backgroundColor: '#FF3F3F'} : {flex: 1}
    }
  ]