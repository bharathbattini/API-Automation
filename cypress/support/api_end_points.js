let version = 1;

const apiEndpoints = {

    userCode : '0ad3fc39-2524-49d2-b800-907a727e4c32',
    accessToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhGNzAyRUUxMjFCQ0Q1MTI2Nzg3Q0VEODA0NDczNjk1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTMyOTEwMzEsImV4cCI6MTY5MzM3NzQzMSwiaXNzIjoiaHR0cHM6Ly9uZXdxYS5hY2NvdW50Lm9uZWZpbi5hcHAiLCJjbGllbnRfaWQiOiJDdXN0b21lckFwcENsaWVudENyZWRlbnRpYWxzIiwic3ViIjoiMGFkM2ZjMzktMjUyNC00OWQyLWI4MDAtOTA3YTcyN2U0YzMyIiwiYXV0aF90aW1lIjoxNjkyOTY1MzE0LCJpZHAiOiJsb2NhbCIsImlhdCI6MTY5Mjk2NTMxNCwic2NvcGUiOlsiY3VzdG9tZXItbG9naW4iLCJjdXN0b21lci1yZWdpc3RyYXRpb24iLCJtb25leS1zaWduIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.ahjVOz3xEmD6v3W2zE_XXm-vGOzVZgBUzXJVh8WNYRD-9wcdwD_Nvf8D9Gc5ZnoZtdY2PYKLYrvxVLOe88Z4PUi15R3qpZK-cjxFZ1HMIbiItnUhj3O1cZMjNLfqeJLTTIwjrEBLof9GaeS6UaAwbr_fl7-zdt8E1-HjO0YC7sEFad7Fsn1-Gjy3mzNfFoW0aAPYbOjXBtEJxjyO_YVysTXgcBcn5z2nnRMcrkxMIccu8wEa58BTRKXAoHWu5RvTslnMjgzNcjUH8i8YX8-fT3Qmjz49uWl9N948PKy49d76nmnufFwvvA2Dnw80XErQ2Yp1LGhYlBXNg3cfx7Uw3A',

    // GET APIs End Points In EOS API Platform 
    getUserProfile : 'api/customer/profile',
    getUserDependent : 'api/customer/dependent',
    getUserInvestments : 'api/customer/investments',
    getUserLoans : 'api/customer/loans',
    getUserIncomeExpense : 'api/customer/income-expense',
    getUserInsurance : 'api/customer/insurance',
    getMemberDetails : 'api/member/details',
    getOnboardingStatusTracker : 'api/customer/onboarding_status/tracker',
    getQFAList : 'api/qfa/list',


    // POST APIs End Points In EOS API Platform
    postUserProfile : 'api/customer/profile',
    postUserDependent : 'api/customer/dependent',
    postUserInvestment : 'api/customer/investments',
    postUserIncomeExpense : 'api/customer/income-expense',
    postUserLoans : 'api/customer/loans',
    postUserInsurance : 'api/customer/insurance',
    postRefreshWorkbook : 'api/user/generate/fwp',


    //RIA APIs End Points In EOS API Platform
    postPanVerification : `api/${version}/pan_verificaton`,
    postCKYCKRAVerification : `api/${version}/user/verification`,
    postPMLAValidation : 'api/customer/pmla',
    get1FinanceMember : 'api/member/1-finance',
    postEsignDocument : `api/${version}/customer/esign-documnet`,
    postMemberIdGenerate : `api/${version}/user/membership_id/generate`,

    //Invalid GET API End Points
    invalidGetUserProfile : 'api/customer/profil',
    invalidGetUserDependent : 'api/customer/dependen',
    invalidgetUserInvestments : 'api/customer/investments',
    invalidgetUserLoans : 'api/customer/loans',
    invalidgetUserIncomeExpense : 'api/customer/income-expense',
    invalidgetUserInsurance : 'api/customer/insurance',
    invalidgetMemberDetails : 'api/member/details',
    invalidgetOnboardingStatusTracker : 'api/customer/onboarding_status/tracker',
    invalidgetQFAList : 'api/qfa/list',

    //Invalid POST API End Points
    invalidPostUserProfile : 'api/customer/profil',
    invalidPostUserDependent : 'api/customer/dependen',
    invalidPostIncomeExpense : 'api/customer/income-expens',
    invalidPostUserInvestment : 'api/customer/investment',
    invalidPostUserLoans : 'api/customer/loan',
    invalidPostUserInsurance : 'api/customer/insuranc',
    invalidPostRefreshWorkbook : 'api/user/generate/fw', 

}


export default apiEndpoints;
