import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const authOptions : NextAuthOptions = {
    session : {
        strategy: "jwt",
    },
    secret: "filip123",
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "Credentials", 
            credentials : {
                email : {label: 'email', type : 'email'},
                password : {label: 'password', type: 'passowrd'},
            },
            async authorize(credentials){
                const {email, password} = credentials as {
                    email: string, 
                    password: string
                };
                const user:any = {
                    id: 1,
                    name: "admin",
                    email: "admin@gmail.com",
                    role: "admin"
                }
                if(email === "admin@gmail.com" && password == 'admin123'){
                    return user
                } else {
                    return null
                }
            } 
    })
    ],
    callbacks: {
        async jwt({token, account, profile, user}:any){
            if(account?.provider === "credentials"){
                token.email = user.email;
                token.fullname = user.fullname ;
                token.role = user.role;
            }
            return token;
        },
        async session({session, token}:any){
            if("email" in token) {
                session.user.email = token.email;
            }
            if("fullnaem" in token){
                session.user.fullnaem = token.fullname;
            }
            if("role" in token){
                session.user.role = token.role;
            }
            return session
        }
    }
}

const handler = NextAuth(authOptions);

export {
    handler as GET, handler as POST
};