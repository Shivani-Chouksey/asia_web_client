
// export const API_BASE_URL ='https://qxz5cv02-5000.inc1.devtunnels.ms/api/v1'
export const API_BASE_URL = 'http://localhost:5000/api/v1'


const API_ENDPOINTS = {
    login: `${API_BASE_URL}/app-user/login/otp`,
    verifyOtp: `${API_BASE_URL}/app-user/verify-otp`,
    profile: `${API_BASE_URL}/app-user/current-user`,
    addProfileDeatils: `${API_BASE_URL}/app-user/update`,
    get_all_companies: `${API_BASE_URL}/company/list`,
    get_company_details: `${API_BASE_URL}/company/detail`,
    add_company_request: `${API_BASE_URL}/company/req`,
    get_all_company_requests: `${API_BASE_URL}/company/req-list`,
    get_active_req_chat_history: `${API_BASE_URL}/activerequestchathistory`,
    get_all_notification: `${API_BASE_URL}/notifications`,
    req_ai_officer: `${API_BASE_URL}/req-ai-officer`,
    approve_ai_officer_req: `${API_BASE_URL}/approve-ai-officer-req`
}


export default API_ENDPOINTS