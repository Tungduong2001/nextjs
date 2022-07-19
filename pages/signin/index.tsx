import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/auth'
import { data } from 'autoprefixer'

type Inputs = {
    email: any,
    password: any
}

const Signin = () => {
    const { login } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async data => {
        try {
            await login(data)
            alert("đăng nhập thành công")
        } catch (error) {
            alert("thất bại")
        }
    }
    return (
        <div className='min-h-[680px]'>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div >
                    <input className="border border-black" type="text" {...register('email')} />
                </div>
                <div>
                    <input className="border border-black" type="text" {...register('password')} />
                </div>
                <button className='btn-blue'>Submit</button>
            </form>
        </div>
    )
}

export default Signin