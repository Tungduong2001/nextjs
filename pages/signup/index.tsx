import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/auth'

type Inputs = {
    email: any,
    password: any
}

const Signup = () => {
    const signup = useAuth().register
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        signup(data)
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

export default Signup