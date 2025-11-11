import { io, Socket } from 'socket.io-client';
import SOCKET_EVENTS, { SOCKET_URL } from './socketEvents';
import { toast } from 'react-toastify';

// export let socket: Socket;

// export const initSocket = (url: string, userId: string) => {

//     if (socket) {
//         console.log('Socket already initialized');
//     }

//     socket = io(url, {
//         transports: ['websocket'],
//         withCredentials: true,
//     });
//     console.log('scoket initilized ---> ', socket);

//     socket.on('connect', () => {
//         console.log('Socket connected');
//         socket.emit(SOCKET_EVENTS.REGISTER, { userId });
//     });

//     // Listen for pending notifications when user registers
//     socket.on(SOCKET_EVENTS.PENDING_NOTIFICATION, (notifications) => {
//         console.log('Pending Notifications:', notifications);
//         // Update UI state (e.g., Redux or React state)
//         // updateNotificationState(notifications);
//     });

//     // Listen for real-time company request notifications
//     socket.on(SOCKET_EVENTS.COMPANY_REQ_NOTIFICATION, (data) => {
//         console.log('New Company Request:', data);
//         // addNotificationToUI(data);
//     });

//     // Listen for chat started
//     // socket.on(SOCKET_EVENTS.CHAT_STARTED, ({ roomId }) => {
//     //     console.log('Chat Started in Room:', roomId);
//     //     joinChatRoom(roomId);
//     // });

//     // Listen for new chat messages
//     socket.on(SOCKET_EVENTS.NEW_MESSAGE, (data) => {
//         console.log('New Message:', data);
//         // appendMessageToChat(data);
//     });

//     socket.on(SOCKET_EVENTS.DISCONNECT, () => {
//         console.log('Socket disconnected');
//     });

//     return socket;
// };


// export const getSocket = () => socket;


// let socket: Socket
// const url = SOCKET_URL
// const db_name = 'asia_impact'
// const db_version = 1

// export const initSocket = (token: string): Promise<Socket> => {
//     return new Promise((resolve, reject) => {
//         if (socket && socket.connected) {
//             console.log('Socket already initialized');
//             return resolve(socket);
//         }

//         socket = io(url, {
//             transports: ['websocket'],
//             withCredentials: true,
//             reconnectionAttempts: 3,
//             timeout: 5000,

//             auth: {
//                 token: token // or from context
//             }
//         });
//         console.log("socket object ------------>", socket);

//         socket.on('connect', () => {
//             console.log('Socket connected:', socket.id);
//             socket.emit(SOCKET_EVENTS.REGISTER);
//             // socket.emit('register', { userId });
//             resolve(socket);
//         });



//         // Listen for real-time company request notifications
//         // socket.on(SOCKET_EVENTS.COMPANY_REQ_NOTIFICATION, (data) => {
//         //     console.log('New Company Request:', data);

//         //     const request = indexedDB.open(db_name, db_version);

//         //     request.onerror = (event) => {
//         //         console.error("IndexDB setup error:", event);
//         //     };

//         //     request.onsuccess = (event: any) => {
//         //         const db = event.target.result;
//         //         const transaction = db.transaction(['notifications'], 'readwrite');
//         //         const store = transaction.objectStore('notifications');

//         //         const addRequest = store.add(data);

//         //         addRequest.onsuccess = () => {
//         //             console.log("Notification data stored successfully.");
//         //             // Optionally update UI here
//         //             // addNotificationToUI(data);
//         //         };

//         //         addRequest.onerror = (err: any) => {
//         //             console.error("Error storing notification data:", err);
//         //         };
//         //     };

//         //     request.onupgradeneeded = (event: any) => {
//         //         const db = event.target.result;
//         //         if (!db.objectStoreNames.contains('notifications')) {
//         //             db.createObjectStore('notifications', { keyPath: 'id', autoIncrement: true });
//         //         }
//         //     };
//         // });
//         // addNotificationToUI(data);


//         // Listen for chat started
//         // socket.on(SOCKET_EVENTS.CHAT_STARTED, ({ roomId }) => {
//         //     console.log('Chat Started in Room:', roomId);
//         //     joinChatRoom(roomId);
//         // });

//         // Listen for new chat messages
//         socket.on(SOCKET_EVENTS.NEW_MESSAGE, (data) => {
//             console.log('New Message:', data);
//             // appendMessageToChat(data);
//         });

//         // socket.on(SOCKET_EVENTS.CHAT_STARTED,(data)=>{
//         //     console.log('SOCKET_EVENTS.CHAT_STARTED',data);
//         //     localStorage.setItem('Room_id',data.roomId)

//         // })

//         socket.on('chat_started', ({ roomId, initialMessage }) => {
//             console.log("Chat started in room:", roomId);
//             console.log("Initial message:", initialMessage);
//             socket.emit('joined_room', { roomId });
//         });


//         socket.on('disconnect', () => {
//             console.log('Socket disconnected');
//         });

//         // ✅ Handle authentication error
//         socket.on('connect_error', (err: any) => {
//             console.log('socket error--------------->', err);

//             if (err.message === 'Authentication error') {
//                 console.error('Auth failed:', err.message);
//                 sessionStorage.removeItem('access_token')
//                 // Redirect to login
//                 window.location.href = '/login';
//             } else {
//                 console.error('Socket connection error:', err.message);
//             }
//         });

//         // socket.on('connect_error', (err) => {
//         //     console.error('Socket connection error:', err.message);
//         //     sessionStorage.removeItem('access_token')
//         //     toast.error(err.message)
//         //     reject(err);
//         // });
//     });
// };

// export const getSocket = () => socket;


let socket: Socket | null = null;

export const initSocket = (token: string): Promise<Socket> => {
  return new Promise((resolve, reject) => {
    if (socket && socket.connected) {
      console.log('Socket already initialized');
      return resolve(socket);
    }

    socket = io(SOCKET_URL, {
      transports: ['websocket'],
      withCredentials: true,
      reconnectionAttempts: 3,
      timeout: 5000,
      auth: { token }
    });

    console.log('Initializing socket...');

    socket.on('connect', () => {
      if (socket) {
        console.log('✅ Socket connected:', socket.id);
        socket.emit(SOCKET_EVENTS.REGISTER);
        resolve(socket);
      }
    });

    socket.on('connect_error', (err: any) => {
      console.error('❌ Socket connection error:', err.message);

      if (err.message === 'Authentication error') {
        sessionStorage.removeItem('access_token');
        reject(new Error('Authentication failed'));
      } else {
        reject(err);
      }
    });

    socket.on('disconnect', () => {
      console.warn('⚠️ Socket disconnected');
    });
  });
};

export const getSocket = (): Socket | null => socket;