'use client'
import LoginForm from "@/components/ui/commons/form/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Note
          </h2>
          <p className="text-center">Please log in to continue</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}