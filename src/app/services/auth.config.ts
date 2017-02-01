interface AuthConfiguration {
    clientID: string,
    domain: string,
    options: Object
}

export const myConfig: AuthConfiguration = {
    clientID: 'c1OIvYBFmOpdrUgXuHGD5j3KE7rjFSJT',
    domain: 'truetube.eu.auth0.com',
    options: {
      languageDictionary: {
        emailInputPlaceholder: 'something@youremail.com',
        title: '',
        signUpLabel: 'Register'
      },
      popupOptions: { width: 500 },

      // socialButtonStyle: 'small',
      // allowSignUp: false,
      theme: {
          logo: '/assets/images/true-tube-logo_black.svg',
          primaryColor: '#FBE407'
        }
    }
};
