import { withAuth } from "next-auth/middleware";

// /admin altındaki her rota korunur; /admin/login hariç (signIn sayfası)
export default withAuth({
  pages: { signIn: "/admin/login" },
});

export const config = {
  matcher: ["/admin/((?!login).*)", "/admin"],
};
