import { FirebaseError } from 'firebase/app'

export const isFirebaseError = (error: unknown): error is FirebaseError =>
  (error as FirebaseError).code !== undefined

const errors = {
  'auth/email-already-in-use': {
    code: 'email',
    message: 'Usuario ya registrado'
  },
  'auth/invalid-email': {
    code: 'email',
    message: 'Email invalido'
  },
  'auth/user-not-found': {
    code: 'email',
    message: 'Usuario no encontrado'
  },
  'auth/wrong-password': {
    code: 'password',
    message: 'Contraseña incorrecta'
  },
  'auth/weak-password': {
    code: 'password',
    message: 'Contraseña muy debil'
  }
}

export const firebaseErrors = ({ code }) => {
  const error = errors[code]
  if (!error) {
    return { code: 'unknown', message: 'Error desconocido' }
  }
  return error
}
