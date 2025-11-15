import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Button } from './index'
import { loginUser } from '../features/auth/authThunks'
import { toast } from 'react-toastify'
import Logo from './Logo'


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { loading, error, isAdmin, isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    dispatch(loginUser(data))

  }

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  useEffect(() => {
    if (isAdmin) {
      toast.success('Admin Login successful! 🎉')
      navigate("/admin-dashboard", { replace: true })
    }else if (isAuthenticated) {
      toast.success('Login successful! 🎉')
      navigate('/profile', { replace: true })
    }
  }, [isAuthenticated, navigate, isAdmin])



  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-2 max-w-md p-6 dark:bg-[var(--bg-secondry)] dark:border-none bg-[#FFFFFF] border border-gray-300 shadow-md rounded-lg"
      >
        <div className=" self-center"><Logo height={80} width={80} /></div>

        <div className="text-sm text-center dark:text-[var(--text-primary)] text-[#1A202C] mb-6">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </div>

        {/* Email Input */}
        <Input
          type="email"
          label="Email :"
          placeholder="Enter your email"
          className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
          {...register('email', {
            required: 'Email is required',
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                'Email address must be a valid address',
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

        {/* Password Input */}
        <Input
          type="password"
          label="Password :"
          placeholder="Enter your password"
          className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
            pattern: {
              value:
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                'Password must include uppercase, lowercase, number, and special character',
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}

        {/* Error message from API or Redux */}
        {error && (
          <p className="text-red-600 text-center font-semibold text-sm mt-3">{error}</p>
        )}

        {/* Submit button */}
        <div className="mt-6">
          <Button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
