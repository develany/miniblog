import { useEffect, useState } from 'react'
import styles from './Register.module.css'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassoword] = useState('')
    const [confirmPassword, setConfirmPassoword] = useState('')
    const [error, setError] = useState('')

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError('')

        const user = {
            displayName,
            email,
            password
        };
        if (password !== confirmPassword) {
            setError('as senhas precisam ser iguais!')
            return
        }
        const res = await createUser(user)
        console.log(res)
    }
    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name='displayName'
                        required
                        placeholder='Nome do usuário'
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                <label>
                    <span>Email:</span>
                    <input
                        type="email"
                        name='email'
                        required
                        placeholder='E-mail do usuário'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name='password'
                        required
                        placeholder='Insira sua senha usuário'
                        onChange={(e) => setPassoword(e.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>Confirmação de Senha:</span>
                    <input
                        type="password"
                        name='confirmPassword'
                        required
                        placeholder='Confirme sua senha usuário'
                        onChange={(e) => setConfirmPassoword(e.target.value)}
                        value={confirmPassword}
                    />
                </label>
                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register