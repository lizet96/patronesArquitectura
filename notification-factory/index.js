const NotificationFactory = require('./patterns/notificationFactory');

// Crear notificaciones
const emailNotification = NotificationFactory.createNotification('email');
const smsNotification = NotificationFactory.createNotification('sms');
const pushNotification = NotificationFactory.createNotification('push');

// Enviar mensajes
emailNotification.send('lizetolvera962004@gmail.com', 'Holaa desde Email!');
smsNotification.send('+4425851526', 'Holaa desde SMS!');
pushNotification.send('User123', 'Hola desde Push Notification!');
