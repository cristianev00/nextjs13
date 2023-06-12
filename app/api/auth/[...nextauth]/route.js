import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Enter your username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, credentials);
          return { id: data.userId, token: data.token };
        } catch (error) {
          throw new Error('Usuario o Contraseña Inválidos');
        }
      }
    })
  ],
  pages: {
    signIn: '/',
    signOut: '/',
    error: '/404'
  },
  session: {
    jstrategy: "jwt",
    maxAge: 3600// 1hr
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  }
});

export { handler as GET, handler as POST};
