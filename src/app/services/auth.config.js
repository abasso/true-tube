export var myConfig = {
    clientID: 'c1OIvYBFmOpdrUgXuHGD5j3KE7rjFSJT',
    domain: 'truetube.eu.auth0.com',
    options: {
        autoclose: true,
        rememberLastLogin: false,
        languageDictionary: {
            emailInputPlaceholder: 'something@youremail.com',
            title: '',
            signUpLabel: 'Register'
        },
        popupOptions: { width: 500 },
        auth: {
            redirect: false
        },
        // socialButtonStyle: 'small',
        // allowSignUp: false,
        theme: {
            logo: '/assets/images/true-tube-logo_black.svg',
            primaryColor: '#FBE407'
        },
        additionalSignUpFields: [
            {
                type: 'select',
                name: 'account_type',
                placeholder: 'Teacher or student?',
                options: [
                    { value: 'Teacher', label: 'Teacher' },
                    { value: 'Student', label: 'Student' }
                ],
            },
            {
                type: 'text',
                name: 'school',
                placeholder: 'School Name'
            }
        ]
    }
};
//# sourceMappingURL=auth.config.js.map