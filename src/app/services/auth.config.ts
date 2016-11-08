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
        title: ""
      },
      // socialButtonStyle: 'small',
      // allowSignUp: false,
      theme: {
          logo: 'https://truetube.localtunnel.me/assets/images/true-tube-logo_white.svg',
          primaryColor: '#FBE407'
        }
    }
};
