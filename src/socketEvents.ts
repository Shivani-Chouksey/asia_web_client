
export const SOCKET_EVENTS = {
    CONNECT: 'connection',
    DISCONNECT: 'disconnect',
    REGISTER: 'register',
    JOIN_ROOM: 'joined_room',
    PENDING_NOTIFICATION: 'pending_notifications',
    COMPANY_REQ_NOTIFICATION: 'company_request_notification',
    NEW_MESSAGE:'new_message',
    ACCEPT_CHAT:'accept_chat',
    REJECT_CHAT:'reject_chat',
    CHAT_STARTED:'chat_started',
    SEND_MESSAGE:'send_message',
    AI_OFFICER_REQ_INTIATE:'ai_officer_req_intilaized'
    
};
export const SOCKET_URL = 'http://localhost:5000';
export default SOCKET_EVENTS;