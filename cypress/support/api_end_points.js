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
    invalidPostUserLoans : 'api/customer/loan',
    invalidPostUserInsurance : 'api/customer/insuranc',
    invalidPostRefreshWorkbook : 'api/user/generate/fw', 

}


export default apiEndpoints;
