import {
  meishiEmailState,
  meishiNameState,
  meishiPortfolioUrlState,
} from './states';
import { css, k, styled } from '@kuma-ui/core';
import { useAtom } from 'jotai';
import { useId, useState } from 'react';
import { useNavigate } from '@tanstack/router';
import { z } from 'zod';
import type { FormEventHandler } from 'react';

export function TopPage() {
  const navigate = useNavigate();

  const [portfolioUrl, setPortfolioUrl] = useAtom(meishiPortfolioUrlState);
  const [name, setName] = useAtom(meishiNameState);
  const [email, setEmail] = useAtom(meishiEmailState);

  const [viewMode, setViewMode] = useState<'portfolioUrl' | 'name' | 'email'>(
    'portfolioUrl',
  );

  const isInActive = (mode: 'portfolioUrl' | 'name' | 'email') =>
    viewMode !== mode;

  const onSubmitPortfolioUrl = ((e) => {
    e.preventDefault();
    if (z.string().url().safeParse(portfolioUrl).success) {
      setViewMode('name');
    }
  }) satisfies FormEventHandler;

  const onSubmitName = ((e) => {
    e.preventDefault();
    setViewMode('email');
  }) satisfies FormEventHandler;

  const onSubmitEmail = ((e) => {
    e.preventDefault();
    navigate({ target: '/preview', params: { portfolioUrl, name, email } });
  }) satisfies FormEventHandler;

  const id = useId();

  return (
    <k.main
      display='flex'
      flexDir='column'
      justify='center'
      minHeight='calc(100vh - 49px)'
    >
      <k.div px={24}>
        <Form
          className={isInActive('portfolioUrl') ? styles.isInActive : undefined}
          onSubmit={onSubmitPortfolioUrl}
          onClick={() => setViewMode('portfolioUrl')}
        >
          <k.label
            htmlFor={`${id}-portfolioUrl`}
            textAlign='center'
            fontWeight={700}
          >
            ポートフォリオの URL
          </k.label>

          <Input
            placeholder='https://example.com'
            required
            id={`${id}-portfolioUrl`}
            name='portfolioUrl'
            onChange={({ target: { value } }) => setPortfolioUrl(value)}
            tabIndex={isInActive('portfolioUrl') ? -1 : undefined}
          />
        </Form>

        <Form
          className={isInActive('name') ? styles.isInActive : undefined}
          onSubmit={onSubmitName}
          onClick={() => setViewMode('name')}
        >
          <k.label htmlFor={`${id}-name`} textAlign='center' fontWeight={700}>
            あなたの名前 / ハンドルネーム
          </k.label>

          <Input
            placeholder='John Doe'
            required
            id={`${id}-name`}
            name='name'
            onChange={({ target: { value } }) => setName(value)}
            tabIndex={isInActive('name') ? -1 : undefined}
          />
        </Form>

        <Form
          className={isInActive('email') ? styles.isInActive : undefined}
          onSubmit={onSubmitEmail}
          onClick={() => setViewMode('email')}
        >
          <k.label htmlFor={`${id}-email`} textAlign='center' fontWeight={700}>
            メールアドレス
          </k.label>

          <Input
            placeholder='your.email@example.com'
            required
            type='email'
            id={`${id}-email`}
            name='email'
            onChange={({ target: { value } }) => setEmail(value)}
            tabIndex={isInActive('email') ? -1 : undefined}
          />
        </Form>
      </k.div>
    </k.main>
  );
}

const Form = styled('form')`
  border-radius: 20px;
  background-color: white;
  display: grid;
  gap: 16px;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  max-width: 600px;
  margin-inline: auto;
  padding: 20px;
  border: 1px solid black;
  transition: scale 0.2s ease-in-out;
`;

const Input = styled('input')`
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #94a3b8;
  font-size: 20px;
  animation: fadeIn 0.3s ease-in-out;
`;

const styles = {
  isInActive: css`
    transform: scale(0.8);
    opacity: 0.5;
    pointer-events: none;
  `,
};
