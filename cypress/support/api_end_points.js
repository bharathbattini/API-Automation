let version = 1;

const apiEndpoints = {

    userCode : '9d16ac99-19d4-4fd6-bb9a-c67f6e9f53a6',
    accessToken : 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkZFQzBDMUYwMTYzMDNEMzY3NUVDMzRCQTI4NDYxQkE2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2OTQwMDU0MzQsImV4cCI6MTY5NDA5MTgzNCwiaXNzIjoiaHR0cHM6Ly91YXQuYWNjb3VudC5vbmVmaW4uYXBwIiwiY2xpZW50X2lkIjoiQ3VzdG9tZXJBcHBDbGllbnRDcmVkZW50aWFscyIsInN1YiI6IjlkMTZhYzk5LTE5ZDQtNGZkNi1iYjlhLWM2N2Y2ZTlmNTNhNiIsImF1dGhfdGltZSI6MTY5NDAwNTQzNCwiaWRwIjoibG9jYWwiLCJpYXQiOjE2OTQwMDU0MzQsInNjb3BlIjpbImN1c3RvbWVyLWxvZ2luIiwiY3VzdG9tZXItcmVnaXN0cmF0aW9uIiwibW9uZXktc2lnbiIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.alI9BfVfhG-in0PQG_VXvcPSw4wPChc0wMxJQd2dRfEUbvt2BlXnfB806WPMaVTqZCUf-TolLYL8udKpI7qojIN3Tp1nu21-M0ZS7kXSi3CcOlFYkGgydA_14ILnlp3AlYpEwxmCvcUurbWfUIwWwhmwOWEAzMZaRWI-GUnzG3WjHvs_NzvgyzDGc0at0p4_WD5TYjTK3JE1xRHuXk6ov0E89C_kLlnAB2RM2VsXrCpRkasLYeB3i49pTNSoP06p8jPU9CKmEfL3dxBr8226JrQzekBHQoEUQVTFyQtaXUag7bC1PTWzGfJOksI3-1GOrtuXmlrYLo2Su3HtIMkm3Q',

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
    getallAssignedCustomers : 'api/customer/all-assigned-customer',
    getScoreSummary : 'api/user/scores',
    getCustomerDetails : 'api/customer/detail',
    getMeetingSummary : 'api/customer/meeting-summary', 

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
