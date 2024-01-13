import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import connectDB from "./config";
import userModel from "./models/userModel";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    //@ts-ignore
    async signIn({ user,account, profile }: any) {
      await connectDB();
      const provider = account?.provider;
      let email = profile?.email; //for google it's profile?.email  for github it's in profile?.email
      let fullName = ""; //for google it's profile?.name   for github it's in profile?.login
      let image = ""; //for goggle it's profile?.picture   for github it's in profile?.avatar_url
      try {
        const existUser = await userModel.findOne({ email }).lean();
        if (existUser) {
          return user;
        }
        if (provider == "google") {
          fullName = profile?.name;
          image = profile?.picture;
        } else if (provider == "github") {
          fullName = profile?.login;
          image = profile?.avatar_url;
        }
        const newUserInfo = {
          email,
          fullName,
          image,
        };
        const newUser = new userModel(newUserInfo);
        await newUser.save();
        return user;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
