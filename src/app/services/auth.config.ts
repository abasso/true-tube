interface AuthConfiguration {
    clientID: string,
    domain: string,
    options: Object
}

export const myConfig: AuthConfiguration = {
    clientID: 'us1FlyqkdVWk0eDtbT5AcTMJRgDWf7CK',
    domain: 'tompain.eu.auth0.com',
    options: {
      languageDictionary: {
        emailInputPlaceholder: "something@youremail.com",
        title: "",
        signUpLabel: "Register"
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
