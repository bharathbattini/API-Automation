let version = 1;

const apiEndpoints = {

    env: 'uat',
    userCode: 'e2c27046-3bc0-4a3c-88fc-0e0eeabcfc51',
    accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkZFQzBDMUYwMTYzMDNEMzY3NUVDMzRCQTI4NDYxQkE2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTcwOTY0NjYsImV4cCI6MTY5NzE4Mjg2NiwiaXNzIjoiaHR0cHM6Ly91YXQuYWNjb3VudC5vbmVmaW4uYXBwIiwiY2xpZW50X2lkIjoiQ3VzdG9tZXJBcHBDbGllbnRDcmVkZW50aWFscyIsInN1YiI6ImUyYzI3MDQ2LTNiYzAtNGEzYy04OGZjLTBlMGVlYWJjZmM1MSIsImF1dGhfdGltZSI6MTY5NzA5NjQ2NiwiaWRwIjoibG9jYWwiLCJpYXQiOjE2OTcwOTY0NjYsInNjb3BlIjpbImN1c3RvbWVyLWxvZ2luIiwiY3VzdG9tZXItcmVnaXN0cmF0aW9uIiwibW9uZXktc2lnbiIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.CjS6s8IWTimLjftcElOEzgC3KkNkvbNFt7iVtUnGy5DJ-7OZUfokhgqyaH-FJPRZ7YmRlebRIAQYCs7ZTv10Nvxa7yAjs7NgN6vo6lSFDRlqA1plZu-s_ow9hRrmrKozccAIy5cx9b5eYZGW4oIsQfjgWoDeD61sNHecj8apGTUvGKkVy3-2BPQ6IuiAtSiZ4OAKU1_naiz127jitMiI11VpGb8MPepOzd_3jmR9sr_i3m9YQYf7UZbJ8BWt8QRxX3j3b_MYPOMhlsACWpJS3_1ZS89nTCzv9W9PrWE5VZ8KufcfWnQt1b6YTlW2eo4sIGVBEfZ78Rxwrcx0hAGjaA',

    // GET APIs End Points In EOS API Platform 
    getUserProfile: 'api/customer/profile',
    getUserDependent: 'api/customer/dependent',
    getUserInvestments: 'api/customer/investments',
    getUserLoans: 'api/customer/loans',
    getUserIncomeExpense: 'api/customer/income-expense',
    getUserInsurance: 'api/customer/insurance',
    getMemberDetails: 'api/member/details',
    getOnboardingStatusTracker: 'api/customer/onboarding_status/tracker',
    getQFAList: 'api/qfa/list',
    getallAssignedCustomers: 'api/customer/all-assigned-customer',
    getScoreSummary: 'api/user/scores',
    getCustomerDetails: 'api/customer/detail',
    getMeetingSummary: 'api/customer/meeting-summary',

    // POST APIs End Points In EOS API Platform
    postUserProfile: 'api/customer/profile',
    postUserDependent: 'api/customer/dependent',
    postUserInvestment: 'api/customer/investments',
    postUserIncomeExpense: 'api/customer/income-expense',
    postUserLoans: 'api/customer/loans',
    postUserInsurance: 'api/customer/insurance',
    postRefreshWorkbook: 'api/user/generate/fwp',


    //RIA APIs End Points In EOS API Platform
    postPanVerification: `api/${version}/pan_verificaton`,
    postCKYCKRAVerification: `api/${version}/user/verification`,
    postPMLAValidation: 'api/customer/pmla',
    get1FinanceMember: 'api/member/1-finance',
    postEsignDocument: `api/${version}/customer/esign-documnet`,
    postMemberIdGenerate: `api/${version}/user/membership_id/generate`,

    //Invalid GET API End Points
    invalidGetUserProfile: 'api/customer/profil',
    invalidGetUserDependent: 'api/customer/dependen',
    invalidgetUserInvestments: 'api/customer/investments',
    invalidgetUserLoans: 'api/customer/loans',
    invalidgetUserIncomeExpense: 'api/customer/income-expense',
    invalidgetUserInsurance: 'api/customer/insurance',
    invalidgetMemberDetails: 'api/member/details',
    invalidgetOnboardingStatusTracker: 'api/customer/onboarding_status/tracker',
    invalidgetQFAList: 'api/qfa/list',

    //Invalid POST API End Points
    invalidPostUserProfile: 'api/customer/profil',
    invalidPostUserDependent: 'api/customer/dependen',
    invalidPostIncomeExpense: 'api/customer/income-expens',
    invalidPostUserInvestment: 'api/customer/investment',
    invalidPostUserLoans: 'api/customer/loan',
    invalidPostUserInsurance: 'api/customer/insuranc',
    invalidPostRefreshWorkbook: 'api/user/generate/fw',

}


export default apiEndpoints;
