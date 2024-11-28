// Clase para notificación de Correo
class EmailNotification {
    send(recipient, message) {
        console.log(`Sending Email to ${recipient}: ${message}`);
    }
}

// Clase para notificación de SMS
class SMSNotification {
    send(recipient, message) {
        console.log(`Sending SMS to ${recipient}: ${message}`);
    }
}

// Clase para notificación Push
class PushNotification {
    send(recipient, message) {
        console.log(`Sending Push Notification to ${recipient}: ${message}`);
    }
}

// Factory para crear notificaciones
class NotificationFactory {
    static createNotification(type) {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error('Invalid notification type');
        }
    }
}

module.exports = NotificationFactory;
