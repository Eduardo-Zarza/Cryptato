import { auth } from '../config/firebase'; 
import { createUserWithEmailAndPassword, User } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; 

// Definir tipo de respuesta
interface RegisterUserResponse {
  success: boolean;
  user?: User;
  error?: string;
}

interface LoginUserResponse {
  success: boolean;
  user?: User;
  error?: string;
}
/**
 * Registra un nuevo usuario en Firebase Authentication.
 * @param email Correo electrónico.
 * @param password Contraseña.
 * @returns Un objeto con `success: true` si el registro fue exitoso, o `error` si falló.
 */
export async function registerUser(email: string, password: string): Promise<RegisterUserResponse> {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;


    // Crear documento del usuario en Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: email,
      cursos: {
        curso1: 0,
        curso2: 0,
        curso3: 0,
      },
      monedas: [],
    });


    return { success: true, user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function loginUser(email: string, password: string): Promise<LoginUserResponse> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
