import { useState, useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, ShieldCheck, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { getUser } from "@/api/generated/user/user";
import { apiClient } from "@/api/apiProvider";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const AdminLogin = () => {
  const navigate = useNavigate();
  // const { signIn, signUp, user, isAdmin, isLoading } = useAuth();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirmPassword?: string }>(
    {},
  );

  const userService = getUser(apiClient);

  // useEffect(() => {
  //   if (!isLoading && user && isAdmin) {
  //     navigate("/admin");
  //   }
  // }, [user, isAdmin, isLoading, navigate]);

  const validateForm = (isSignup = false) => {
    try {
      if (isSignup) {
        signupSchema.parse(formData);
      } else {
        loginSchema.parse(formData);
      }
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { email?: string; password?: string; confirmPassword?: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as "email" | "password" | "confirmPassword"] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const passwordChecks = [
    { label: "At least 8 characters", test: (p: string) => p.length >= 8 },
    { label: "One uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
    { label: "One lowercase letter", test: (p: string) => /[a-z]/.test(p) },
    { label: "One number", test: (p: string) => /[0-9]/.test(p) },
    { label: "One special character", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!validateForm(false)) return;

      setIsSubmitting(true);
      const response: any = await userService.loginUser({
        userName: formData.email,
        password: formData.password,
      });

      console.log(response)
      localStorage.setItem("token", response.data.tokenName);
      navigate("/admin");
      // const { error } = await signIn(formData.email, formData.password);
      setIsSubmitting(false);

      // if (error) {
      //   toast({
      //     variant: "destructive",
      //     title: "Sign in failed",
      //     description: "Invalid email or password.",
      //   });
      // }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign in failed",
        description: "Invalid email or password.",
      });
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!validateForm(true)) return;

      setIsSubmitting(true);
      const response = await userService.registerUser({
          password: formData.password,
          userName: formData.email,
          role: "admin",
          cpassword: formData.confirmPassword,
      });
      console.log(response);
      // const { error } = await signUp(formData.email, formData.password);
      setIsSubmitting(false);

      // if (error) {
      //   toast({
      //     variant: "destructive",
      //     title: "Sign up failed",
      //     description: error.message.includes("already registered")
      //       ? "This email is already registered. Please sign in instead."
      //       : error.message,
      //   });
      //   return;
      // }

      toast({
        title: "Account created!",
        description:
          "Please contact an administrator to grant you admin access.",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Sign up failed",
        description: "An error occurred during sign up. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-border/50 shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl">Admin Portal</CardTitle>
              <CardDescription>
                Sign in to access the admin dashboard
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="mt-6">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signin-email"
                        name="email"
                        type="email"
                        placeholder="admin@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-9"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signin-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-9 pr-9"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-destructive">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        name="email"
                        type="email"
                        placeholder="admin@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-9"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-9 pr-9"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-destructive">
                        {errors.password}
                      </p>
                    )}
                    {formData.password && (
                      <div className="space-y-1 pt-1">
                        {passwordChecks.map((check) => {
                          const passed = check.test(formData.password);
                          return (
                            <div key={check.label} className="flex items-center gap-2 text-xs">
                              {passed ? (
                                <Check className="h-3 w-3 text-green-500" />
                              ) : (
                                <X className="h-3 w-3 text-destructive" />
                              )}
                              <span className={passed ? "text-green-600" : "text-muted-foreground"}>
                                {check.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="signup-confirm-password"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-9"
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-destructive">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating account..." : "Create Account"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Note: After signing up, contact an administrator to receive
                    admin access.
                  </p>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t text-center">
              <Button variant="ghost" onClick={() => navigate("/")}>
                ← Back to Website
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
