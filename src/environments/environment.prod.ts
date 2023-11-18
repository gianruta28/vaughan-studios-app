export const environment = {
    version: import.meta.env["NG_APP_VERSION"],
    countdownDate: import.meta.env["NG_APP_COUNTDOWN_DATE"],
    firebaseConfig: {
        apiKey: import.meta.env["NG_APP_KIREBASE_KEY"],
        authDomain: import.meta.env["NG_APP_FIREBASE_DOMAIN"],
        projectId: import.meta.env["NG_APP_FIREBASE_PROJECT_ID"],
        storageBucket: import.meta.env["NG_APP_FIREBASE_STORAGE_BUCKET"],
        messagingSenderId: import.meta.env["NG_APP_FIREBASE_SENDER_ID"],
        appId: import.meta.env["NG_APP_FIREBASE_APP_ID"],
        measurementId: import.meta.env["NG_APP_FIREBASE_MEASUREMENT_ID"],
    }
};
