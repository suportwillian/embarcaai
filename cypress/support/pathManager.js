import '@cypress/xpath';
import objectPageAccount from '../pages/createAccount';
import objectPageLogin from '../pages/login';
import objectPageHome from '../pages/home';
import variables from '../support/variable';

const paths = {
    element: objectPageAccount,
    elementLogin: objectPageLogin,
    elementHome: objectPageHome,
    variable: variables
};

export default paths;