import { NextRequest, NextResponse } from "next/server";

interface auth {
  auth: any;
  request: NextRequest;
}

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }: auth) {
      const user = auth?.user;
      const path = request.nextUrl.pathname;
      const paths = ["/", "/about", "/contact", "/services"];
      const authorizedPaths = [
        "/profile",
        "/TreatmentAppointment",
        "/checkupAppointments",
        "/appointment",
      ];
      const isAdminPath = request.nextUrl.pathname?.startsWith("/admin");
      const isNotAuthorizedPage = paths.includes(path);
      const isOnAuthPage = path === "/login" || path === "/signup";
      const isOnPrivatePage = authorizedPaths.includes(path);

      //ONLY ADMINS CAN ACCESS TO /ADMIN
      if (!user?.isAdmin && isAdminPath) {
        return false;
      }
      //ONLY LOGED USER CAN ACCESS
      if (!user && isOnPrivatePage) {
        return NextResponse.redirect(new URL("/login", request.url));
      }

      //ONLY AUTHENTICATED USER CAN ACCESS
      if (isNotAuthorizedPage) {
        return true;
      }

      //ONLY UNAUTHENTICATED USER CAN ACCESS
      if (user && isOnAuthPage) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      return true;
    },
  },
};
