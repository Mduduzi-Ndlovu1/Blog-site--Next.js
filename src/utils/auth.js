// utils/auth.js
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      GOOGLE_CLIENT_ID: process.env.GOOGLE_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_SECRET,
    }), 
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
