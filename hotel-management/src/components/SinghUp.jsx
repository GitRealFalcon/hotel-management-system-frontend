import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import api from '../api/axios'
import { loginUser } from '../features/auth/authThunks'
import { Input, Button } from './index' // assuming you have these components

const Signup = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ✅ Redirect if user already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  // ✅ Handle form submission
  const onSubmit = async (data) => {
    try {
      const res = await api.post('/users/register', data)
      if (res.status === 201 || res.status === 200) {
        toast.success('Signup successful! 🎉')
        // Auto-login user after successful registration
        dispatch(loginUser({ email: data.email, password: data.password }))
      }
    } catch (error) {
      // Extract message safely
      const message = error.response?.data?.message || 'Signup failed'
      toast.error(message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 flex flex-col gap-2 dark:bg-[var(--bg-secondry)] dark:border-none bg-[#FFFFFF] border border-gray-300  shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold dark:text-[var(--text-primary)] text-[#1A202C] text-center mb-4">Create an Account</h2>

        <div className="text-sm text-center dark:text-[var(--text-primary)] text-[#1A202C] mb-6">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </div>

        {/* Name */}
        <Input
          type="text"
          label="Full Name :"
          placeholder="Enter your full name"
          className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
          {...register('fullName', {
            required: 'Full name is required',
            minLength: { value: 3, message: 'Name must be at least 3 characters' },
          })}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}

        {/* Email */}
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
                'Email address must be valid',
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}

        {/* Password */}
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

        {/* Confirm Password */}
        <Input
          type="password"
          label="Confirm Password :"
          placeholder="Confirm your password"
          className="font-semibold dark:text-[var(--text-primary)] text-[#1A202C] bg-[#F4F7FE] dark:bg-[var(--bg-primary)]"
          {...register('confirmPassword', {
            required: 'Please confirm your password',
            validate: (value, formValues) =>
              value === formValues.password || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}

        {/* Submit Button */}
        <div className="mt-6">
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  )
}

export default Signup

