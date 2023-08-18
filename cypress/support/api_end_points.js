let version = 1;

const apiEndpoints = {

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
    postIncomeExpense : 'api/customer/income-expense',
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

    //Invalid API End Points
    invalidGetUserProfile : 'api/customer/profil',

}


export default apiEndpoints;
