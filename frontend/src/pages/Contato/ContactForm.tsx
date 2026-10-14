import { useState } from 'react'
import { useForm, type FieldError } from 'react-hook-form'
import { FiAlertTriangle, FiCheckCircle, FiSend } from 'react-icons/fi'
import { perfil } from '../../data/perfil'
import { useLanguage } from '../../i18n/useLanguage'
import { EnvioNaoConfiguradoError, enviarContato, type DadosContato } from '../../services/contato'

type Estado = 'ocioso' | 'enviando' | 'sucesso' | 'erro' | 'naoConfigurado'

const PADRAO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Formulário de contato com validação (React Hook Form) e envio por EmailJS + API.
export function ContactForm() {
  const { t, idioma } = useLanguage()
  const [estado, setEstado] = useState<Estado>('ocioso')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DadosContato>({ mode: 'onTouched' })

  const v = t.contato.validacao

  // As mensagens de erro são montadas na hora de exibir,
  // assim elas acompanham a troca de idioma.
  function mensagemErro(campo: keyof DadosContato, erro?: FieldError) {
    if (!erro) return ''
    const mensagens: Record<keyof DadosContato, Record<string, string>> = {
      nome: { required: v.nomeObrigatorio, minLength: v.nomeCurto, maxLength: v.nomeLongo },
      email: { required: v.emailObrigatorio, pattern: v.emailInvalido },
      mensagem: { required: v.mensagemObrigatoria, minLength: v.mensagemCurta, maxLength: v.mensagemLonga },
    }
    return mensagens[campo][erro.type] ?? ''
  }

  async function aoEnviar(dados: DadosContato) {
    setEstado('enviando')
    try {
      await enviarContato(
        { nome: dados.nome.trim(), email: dados.email.trim(), mensagem: dados.mensagem.trim() },
        idioma,
      )
      setEstado('sucesso')
      reset()
    } catch (erro) {
      setEstado(erro instanceof EnvioNaoConfiguradoError ? 'naoConfigurado' : 'erro')
    }
  }

  const enviando = estado === 'enviando'

  return (
    <div className={`contato-form contato-form--${estado}`}>
      <div className="contato-form__topo">
        {/* Chama do bico de Bunsen: cresce ao enviar e fica verde no sucesso (teste de chama!) */}
        <svg className="bunsen" viewBox="0 0 40 64" aria-hidden="true">
          <g className="bunsen__chama">
            <path className="bunsen__externa" d="M20 40q-14-18 0-38 14 20 0 38z" />
            <path className="bunsen__interna" d="M20 39q-7-10 0-22 7 12 0 22z" />
          </g>
          <rect x="15" y="40" width="10" height="16" fill="#8a8a8a" />
          <rect x="9" y="56" width="22" height="6" rx="2" fill="#5f5e5a" />
        </svg>
        <h2>{t.contato.form.titulo}</h2>
      </div>

      {estado === 'sucesso' ? (
        <div className="contato-form__status contato-form__status--sucesso" role="status">
          <FiCheckCircle aria-hidden="true" />
          <div>
            <strong>{t.contato.form.sucessoTitulo}</strong>
            <p>{t.contato.form.sucesso}</p>
            <button type="button" className="btn btn--outline" onClick={() => setEstado('ocioso')}>
              {t.contato.form.novaMensagem}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(aoEnviar)} noValidate>
          <div className="campo">
            <label htmlFor="nome">{t.contato.form.nome}</label>
            <input
              id="nome"
              autoComplete="name"
              placeholder={t.contato.form.nomePh}
              aria-invalid={errors.nome ? 'true' : 'false'}
              aria-describedby={errors.nome ? 'nome-erro' : undefined}
              {...register('nome', { required: true, minLength: 2, maxLength: 120 })}
            />
            {errors.nome && (
              <p id="nome-erro" className="campo__erro">
                {mensagemErro('nome', errors.nome)}
              </p>
            )}
          </div>

          <div className="campo">
            <label htmlFor="email">{t.contato.form.email}</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder={t.contato.form.emailPh}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-erro' : undefined}
              {...register('email', { required: true, pattern: PADRAO_EMAIL })}
            />
            {errors.email && (
              <p id="email-erro" className="campo__erro">
                {mensagemErro('email', errors.email)}
              </p>
            )}
          </div>

          <div className="campo">
            <label htmlFor="mensagem">{t.contato.form.mensagem}</label>
            <textarea
              id="mensagem"
              rows={6}
              placeholder={t.contato.form.mensagemPh}
              aria-invalid={errors.mensagem ? 'true' : 'false'}
              aria-describedby={errors.mensagem ? 'mensagem-erro' : undefined}
              {...register('mensagem', { required: true, minLength: 10, maxLength: 2000 })}
            />
            {errors.mensagem && (
              <p id="mensagem-erro" className="campo__erro">
                {mensagemErro('mensagem', errors.mensagem)}
              </p>
            )}
          </div>

          {(estado === 'erro' || estado === 'naoConfigurado') && (
            <div className="contato-form__status contato-form__status--erro" role="alert">
              <FiAlertTriangle aria-hidden="true" />
              <div>
                <strong>{t.contato.form.erroTitulo}</strong>
                <p>
                  {estado === 'erro' ? t.contato.form.erro : t.contato.form.naoConfigurado}{' '}
                  <a href={`mailto:${perfil.email}`}>{perfil.email}</a>.
                </p>
              </div>
            </div>
          )}

          <button type="submit" className="btn btn--primary contato-form__enviar" disabled={enviando}>
            {enviando ? t.contato.form.enviando : t.contato.form.enviar}
            <FiSend aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  )
}
